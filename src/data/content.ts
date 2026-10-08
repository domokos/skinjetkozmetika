export const services = [
  { title: 'Arckezelések', description: 'Hagyományos tisztítás, feltöltő és anti-aging kezelések, személyre szabva, a bőrtípusod és aktuális igényeid szerint, kézi és gépi eljárásokkal kombinálva.' },
  { title: 'Fasciális arcterápia', description: 'Manuális, mélyrétegű kezelés az arc, a nyak és a dekoltázs természetes liftinghatásáért.' },
  { title: 'Klasszikus masszázs', description: 'Bőrfeszesítés és kötőszövet-erősítés vákuumos nyirokmasszázzsal, rádiófrekvenciával.' },
  { title: 'Testkezelések', description: 'A bőr feszesítésére és a kötőszövet erősítésére, vákuumos nyirokmasszázzsal és rádiófrekvenciával.' },
  { title: 'Gyantázás', description: 'Többféle gyantával dolgozunk, az érzékeny bőrökre is van megoldásunk.' },
  { title: 'Szempilla- és szemöldökfestés, formázás', description: 'Személyre szabott színezés és formázás a tekintet természetes kiemeléséért.' },
  { title: 'Klasszikus arc-, nyak- és dekoltázsmasszázs', description: 'Élénkíti a keringést, feszesíti és frissíti a bőrt. Speciális hatóanyagokkal kiegészítve fokozza a hidratálást és az anti-aging hatást.' },
  { title: 'Smink és sminkoktatás', description: 'Nappali és alkalmi smink, egyéni vagy kiscsoportos oktatás tiniknek, barátnőknek és anya-lánya párosoknak.' },
  { title: 'Álló szolárium', description: 'Speciális, kímélő csövekkel.' },
]

export const concerns = [
  { title: 'Megereszkedett arckontúr, lifting', methods: ['Fókuszált ultrahang (HIFU)', 'Rádiófrekvencia', 'Plazma, mikrotűs MezoPen'] },
  { title: 'Akné és hegek', methods: ['Mikrodermabrázió', 'Plazma és lézer', 'Oxigénes kezelés'] },
  { title: 'Toka, lógó felkar', methods: ['Rádiófrekvencia', 'Vákuumos kezelés'] },
  { title: 'Stria, cellulit', methods: ['Rádiófrekvencia', 'Vákuumos kezelés'] },
  { title: 'Szemkezelések', methods: ['Oxigénes feltöltés', 'Plazma és vákuum', 'D-Cool krioterápia'] },
]

export const treatments = [
  { id: 'mikrodermabrazio', number: '01', title: 'Mikrodermabrázió', description: 'Hegekre, tág pórusokra, pigmentfoltokra és ránctalanításra kiváló. A fájdalommentes hámlasztás megújítja a bőrfelszínt, amely így jobban felszívja a hatóanyagokat.' },
  { id: 'hidrodermabrazio', number: '02', title: 'Hidrodermabrázió', description: 'Vizes bőrmegújító eljárás, amely nem szárít, azonnal hidratál, és ideális előkészítő kezelés a feltöltő eljárásokhoz.' },
  { id: 'ultrahang', number: '03', title: 'Ultrahang', description: 'Gyors és hatékony hatóanyagbevitel: a vízben és zsírban oldódó, nagyobb molekulák is eljutnak a bőr mélyebb rétegeibe.' },
  { id: 'hifu', number: '04', title: 'Fókuszált ultrahang · HIFU', description: 'Nem invazív lifting az arc, az állvonal, a nyak, a toka és a dekoltázs feszesítésére. A fókuszált hőenergia serkenti a kollagéntermelést és a bőr önregenerációját.' },
  { id: 'dcool', number: '05', title: 'D-Cool kezelés', description: 'Meleg-hideg hőterápia elektroporációval. A kezelés segíthet a toka és a szem körüli ödémák csökkentésében, valamint a bőr feszesítésében és feltöltésében.' },
  { id: 'elektroporacio', number: '06', title: 'Elektroporáció', description: 'Hatékony feltöltő eljárás mélyhidratálásra, táplálásra és bőrmegújításra. Speciális elektromos hullámok segítik a hatóanyagok mélyebb rétegekbe jutását.' },
  { id: 'plazma', number: '07', title: 'Plazma', description: 'A plazmakisülés stimulálja a kollagénrostok képződését, támogatja a bőr fertőtlenítését, és gyulladásos bőrproblémák kezelésében is alkalmazható.' },
  { id: 'radiofrekvencia', number: '08', title: 'Rádiófrekvencia', description: 'Feszesítő, kollagéntermelést támogató kezelés arcra, dekoltázsra és testre. A hőhatás új kötőszöveti rostok termelésére ösztönzi a szervezetet.' },
  { id: 'oxigenes-feltoltes', number: '09', title: 'Oxigénes feltöltés', description: 'Tű nélküli, fájdalommentes hatóanyagbevitel. Különösen jól alkalmazható a táskás, karikás szemek, valamint az aknéra és rosaceára hajlamos bőr kezelésében.' },
  { id: 'vakuumos-nyirokmasszazs', number: '10', title: 'Vákuumos nyirokmasszázs', description: 'Az SPM vákuummasszázs köpölyözést és masszázst kombinál. Arcon és dekoltázson feszesítésre, testen a nyirokáramlás és a kötőszövet támogatására alkalmazzuk.' },
  { id: 'mezopen', number: '11', title: 'MezoPen', description: 'Kollagénindukciós kezelés, amely mikrosérülésekkel serkenti a bőr természetes kollagén- és elasztintermelését. A kezelés során orvosi tisztaságú szérumokat használunk.' },
]

export const lightTreatments = [
  { title: 'Lágylézer', description: 'Fájdalommentes biostimuláció: támogatja a sebgyógyulást, és gyulladáscsökkentő, fájdalomcsillapító hatású. Két hullámhosszal segíti a regenerációs folyamatokat.', imageAlt: 'Lágylézeres arckezelés nyugodt kozmetikai környezetben' },
  { title: 'Fotobiomodulációs LED maszk', description: 'A fénykezelés serkenti a bőr és a mélyebb szövetek öngyógyító folyamatait, regeneráló és gyulladáscsökkentő hatású. Modern anti-aging hatóanyagokkal egészíthető ki.', imageAlt: 'LED fényterápiás arcápolás' },
  { title: 'Bioptron lámpa', description: 'A Bioptron fényterápia fájdalomcsillapításra, sebgyógyításra, aknéra, rozáceára és bőrgyulladásra alkalmazható, valamint serkenti a kollagén- és elasztintermelést.', imageAlt: 'Fényterápiás bőrápolás és regeneráló kezelés' },
]

export const prices = [
  { title: 'Arckezelések', items: [
    { name: 'Klasszikus tisztításos kezelés', amount: '27 000' }, { name: 'Arckezelés abrázióval', amount: '30 000' }, { name: 'Teenager kezelés', amount: '20 000' }, { name: 'Hátkezelés', amount: '20 000' },
  ] },
  { title: 'Anti-aging kezelések', items: [
    { name: 'Rádiófrekvenciás kezelés', amount: '34 000' }, { name: 'Plazma kezelés', amount: '34 000' }, { name: 'Elektroporációs kezelés', amount: '34 000' }, { name: 'MezoPen kezelés', amount: '34 000' }, { name: 'Lézeres kezelés', amount: '34 000' }, { name: 'Oxigénterápiás kezelés', amount: '34 000' }, { name: 'D-Cool hőterápiás kezelés', amount: '34 000' }, { name: 'HIFU kezelés', amount: '55 000' },
  ] },
  { title: 'Masszázs', items: [
    { name: 'Klasszikus arc-, nyak- és dekoltázsmasszázs', amount: '11 000' }, { name: 'Fasciális ArcTerápia, lifting masszázs', amount: '16 000' }, { name: 'Arcmasszázs', amount: '8 000' },
  ] },
  { title: 'Gyanta · Vax', items: [
    { name: 'Bajusz', amount: '2 500' }, { name: 'Arc (bajusz, szakáll, pajesz)', amount: '7 000' }, { name: 'Hónalj', amount: '3 000' }, { name: 'Fazon félig', amount: '5 000' }, { name: 'Fazon teljes', amount: '8 000' }, { name: 'Kar', amount: '5 000' }, { name: 'Láb + térd', amount: '5 000' }, { name: 'Comb', amount: '5 000' }, { name: 'Láb teljes', amount: '10 000' },
  ] },
  { title: 'Szempilla, szemöldök', items: [
    { name: 'Szempilla festés', amount: '3 500' }, { name: 'Szemöldök festés', amount: '2 500' }, { name: 'Szemöldök formázás csipesz/vax', amount: '2 500' }, { name: 'Bajusz szőkítés', amount: '2 500' },
  ] },
  { title: 'Testkezelések', items: [
    { name: 'Rádiófrekvencia testtájanként', amount: '8 000' }, { name: 'Vákuum masszázs testtájanként', amount: '8 000' }, { name: 'Vákuum masszázs láb + fenék', amount: '11 000' }, { name: 'Vákuum masszázs láb + fenék + has', amount: '15 000' },
  ] },
  { title: 'Smink', items: [
    { name: 'Nappali smink', amount: '8 000' }, { name: 'Alkalmi smink', amount: '25 000' }, { name: 'Sminkoktatás', amount: '25 000' },
  ] },
  { title: 'Szolárium', items: [
    { name: 'Szolárium 5 perc', amount: '1 600' }, { name: 'Szolárium bérlet, 5 × 10 alkalmas', amount: '14 400' },
  ] },
]
