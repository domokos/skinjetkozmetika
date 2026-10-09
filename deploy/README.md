# Internal Rocky Linux Deployment

Target: `<ssh-user>@<server-hostname>` on the Rocky Linux deployment server.
Test URL: `http://<server-hostname>:9000/#/`.
Replace `<ssh-user>`, `<server-hostname>`, `<server-ip>`, `<allowed-client-subnet>`,
and `<public-domain>` with the values for your environment; do not use them
literally in commands or configuration.

Only clients in `<allowed-client-subnet>` are allowed by Nginx. Requests from other
sources receive HTTP 403; this is an HTTP access restriction, not a network
firewall. The standalone configuration binds only the server LAN IPv4 address.

Port 8080 is already used by Java. Port 9000 was checked free and is already
assigned SELinux type `http_port_t`. SELinux stays enforcing. Firewalld is
inactive and must not be enabled as part of this deployment.

The dedicated `skinjet-nginx.service` uses only `nginx-internal.conf`; it never
loads the package's default configuration or listens on ports 80/443. Do not
enable the standard `nginx.service`. Existing Apache/FreeIPA, OpenKM, Plex,
Home Assistant access, IPFire forwarding and public DNS remain unchanged.

## Build And Install

The current deployment was built on a local Linux workstation running VS Code,
from the repository checkout. Its generated `dist/` files were copied over SSH
to the deployment server and installed under
`/srv/media/www/skinjetkozmetika/releases/`. The server only serves the generated static
files through Nginx; it does not perform the build or run a Node.js application
server.

There is no separate build server or automated GitLab/GitHub runner configured.
A pushed commit does not trigger deployment automatically. For subsequent
releases, build on the local workstation (or another machine with the required tools), then
publish the output using the update procedure below.

Build on a machine with supported Node.js, not on the production server:

```sh
npm ci
npm run lint
npm run build
```

Install Rocky's `nginx` package on the server after inspecting the package transaction.
Install `nginx-internal.conf` as `/etc/nginx/skinjet-internal.conf` and
`skinjet-nginx.service` as `/etc/systemd/system/skinjet-nginx.service`, owned by
root with mode 0644.

The checked-in configuration contains deployment-specific settings. Before
using it on another server, review its `listen`, `server_name`, and `allow`
directives for the server IP, internal hostname, public domain, and client subnet.

Copy the contents of `dist/` into a new directory under
`/srv/media/www/skinjetkozmetika/releases/<release-id>`, owned by root, with readable
files (0644) and traversable directories (0755). Point
`/srv/media/www/skinjetkozmetika/current` at that complete release using an atomic
symlink replacement. Never allow the Nginx worker to write the deployed files.

The service requires the `/srv/media` content volume to be mounted before it
starts. Label only this site's subtree, not the shared media volume. Check
SELinux traversal permissions on its existing parent directories separately.

Persist the web-content SELinux label, then validate and activate:

```sh
sudo semanage fcontext -a -t httpd_sys_content_t '/srv/media/www/skinjetkozmetika(/.*)?'
sudo restorecon -RF /srv/media/www/skinjetkozmetika
sudo nginx -t -c /etc/nginx/skinjet-internal.conf
sudo systemctl daemon-reload
sudo systemctl enable --now skinjet-nginx.service
```

Add the file-context rule only once; if it already exists, inspect it before
changing it. Do not change SELinux port assignments blindly.

## Verify

From an allowed client, check the test URL, actual generated `/assets/` URLs,
all hamburger destinations, page refresh, and the fascia treatment links.
Use `http://<server-ip>:9000/#/` if internal DNS resolves elsewhere.
Google Fonts and Unsplash photos still require browser internet access.

On the deployment server, check `systemctl status skinjet-nginx`, the numeric TCP
listeners, Nginx access/error logs, and SELinux AVC denials. A request issued on
the server using its own IP address should return 403 if that address is outside
the allowed client subnet, demonstrating
the source restriction. Preserve existing service listeners and verify their
health against the pre-deployment baseline. No IPFire inter-zone rule is
changed automatically if client connectivity is blocked.

## Update And Roll Back

Keep previous release directories. For an update, build and copy a complete new
release, then atomically replace `current`. No Nginx reload is needed for a
content-only change. To roll back, atomically point `current` to the previous
release. Retain older hashed assets for at least the previous release when
deploying to active clients, so previously loaded HTML can still request them.

For a first-deployment rollback, stop and disable only `skinjet-nginx.service`.
Do not remove shared web-server packages, change existing services, or alter
IPFire. HTTPS and `<public-domain>` public rollout are a separate phase.