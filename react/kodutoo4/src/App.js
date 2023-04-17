import React from 'react';
import './App.css';
import Linn from './Linn';
import Cards from './Cards';
//import { ReactDOM } from 'react';


import pilt1 from './berliin.jpeg'
import pilt2 from './london.jpg'
import pilt3 from './madrid.jpg'
import pilt4 from './pariis.jpg'
import pilt5 from './rooma.jpg'
import pilt6 from './kevade.jpg'
import pilt7 from './rehepapp.jpg'
import pilt8 from './nullpunkt.jpg'
import pilt9 from './Kunksmoor-Aino-Pervik-1973.jpg'
import pilt10 from './hobevalge1-scaled.jpg'
 


function App()  {
    

 const linn1 = {
 nimi: "Saksamaa",
 kirjeldus: "Pealinn: Berliin",
 pilt: pilt1
 }

 const linn2 = {
 nimi: "Suurbritannia",
 kirjeldus: "Pealinn: London",
 pilt: pilt2
 }

 const linn3 = {
 nimi: "Hispaania",
 kirjeldus: "Pealinn: Madrid",
 pilt: pilt3
 }

 const linn4 = {
 nimi: "Prantsusmaa",
 kirjeldus: "Pealinn: Pariis",
 pilt: pilt4
 }

 const linn5 = {
 nimi: "Itaalia",
 kirjeldus: "Pealinn: Rooma",
 pilt: pilt5
 }

 const linnad = [linn1, linn2, linn3, linn4, linn5]

 return (
 <div className="kontainer">
    <header className="App-header">
      <h1>VÄÄRT PEALINNAD JA RAAMATUD</h1>
    </header>
    <div className='cards'>
      {linnad.map((linn, index) => {
      return (
      <Linn 
      key={index}
      linnaNimi={linn.nimi} 
      kirjeldus={linn.kirjeldus} 
      pilt={linn.pilt} /> )
      })}
    </div>

    
    
    
    <div className='books'>
      <div className='list'>
        <div className="card bg-dark text-white" data-index="0">Kevade</div>
        <div className="card bg-dark text-white" data-index="1">Rehepapp</div>
        <div className="card bg-dark text-white" data-index="2">Nullpunkt</div>
        <div className="card bg-dark text-white" data-index="3">Kunksmoor</div>
        <div className="card bg-dark text-white" data-index="4">Hõbevalge</div>
      </div>
      
      <div id='result'>
      <Cards />
      <div className="over-menu active" data-index="0">
            <div className="book-content"><img src={pilt6} alt="Kevade" />
                <div className="book-info">
                <h1>Kevade</h1>
                <h2>Autor: Oskar Luts</h2>
                <p>Kevade on eesti kirjanduses märgiline teos. Oskar Luts on loonud tõeliselt kustumatud tegelaskujud. 
                    Kes siis poleks kuulnud riukalikust Tootsist, mõtlikust Arnost, tõsisest Tõnissonist, virilast Kiirest või tujukast Teelest? 
                    Ei öelda ju asjatult, et igas klassis oma Tootsid, Arnod ja Teeled …
                    Luts jutustab mõnusa huumoriga Paunvere kooliõpilaste juhtumistest. 
                    Loe Kiire ja Tootsi vempudest ristjatsitel ja saunas, ela kaasa kihelkonnakooli poiste ja kirikumõisa noorhärrade võitlustele ning tutvu laiemalt 19. sajandi lõpu värvika koolieluga.
                </p>
                </div> 
            </div>
      </div>
      <div className="over-menu active" data-index="1">
            <div className="book-content"><img src={pilt7} alt="Rehepapp" />
                <div className="book-info">
                <h1>Rehapapp</h1>
                <h2>Autor: Andrus Kivirähk</h2>
                <p>Romaan eesti rahva raskest elust mõisahärrade rõhumise all. 
                    Rängas olukorras ei jää rahval muud üle, kui krabada endale kõike mida kätte saab, olgu siis naabri sahvrist, mõisaaiast või teede ristmikul vanakurja käest. 
                    Loomulikult on mängus ka kõiksugused kratid, tondid ja kollid, kes varitsevad põõsas, silmad põlemas, et paljukannatanud külainimestele veelgi kurja teha.
                </p>
                </div> 
            </div>
      </div>
      <div className="over-menu active" data-index="2">
            <div className="book-content"><img src={pilt8} alt="Nullpunkt" />
                <div className="book-info">
                <h1>Nullpunkt</h1>
                <h2>Autor: Margus Karu</h2>
                <p>See on lugu probleemsest kodust ja halvast koolist pärit Johannesest, kel õnnestub end ühte Tallinna eliitkooli sisse rääkida. 
                    Paraku avastab ta peagi, et klassikaaslased on ta jõuliselt heidikustaatusse taandanud. 
                    Kui Johannese elupüramiidi kolm peamist tahku -kodu, sõbrad ja kool  -kokku vajuvad, mõistab ta, et on jõudnud nullpunkti. 
                    Nii töötab ta välja skeemi, kuidas saavutada populaarsus ja aktsept, ning hakkab seda mineviku survest ja oleviku löökidest hoolimata jõuliselt rakendama.
                </p>
                </div> 
            </div>
      </div>
      <div className="over-menu active" data-index="3">
              <div className="book-content"><img src={pilt9} alt="Kunksmoor" />
                <div className="book-info">
                <h1>Kunksmoor</h1>
                <h2>Autor: Aino Pervik</h2>
                <p>Keset tuulist merd oli ühes kohas pisike saar. Ümber saare seisid igas kandis teravad kivid ja veealused salakarid. 
                  Nende vahel pahises ja vahutas vesi. Saarel kasvasid kõverad ja haralised männid. 
                  Männikualune oli täis mustikavarsi, lagedatel kohtadel kasvasid aga teravate okastega kibuvitsapõõsad. 
                  Saare randa kivide vahele tegid merelinnud oma pesad. Peale lindude elas saarel veel ainult Kunksmoor.
                </p>
                </div> 
            </div>
        </div>
      <div className="over-menu active" data-index="4">
            <div className="book-content"><img src={pilt10} alt="Hõbevalge" />
                <div className="book-info">
                <h1>Hõbevalge</h1>
                <h2>Autor: Lennart Meri</h2>
                <p>Reisikiri tuulest ja muinasluulest" on Eesti kirjaniku ja poliitiku Lennart Meri raamat, mis ilmus esimest korda 1976. aastal. 
                    Meri arutles teoses poolteaduslikult ja fantaasiaküllaselt eestlaste ning teiste läänemeresoomlaste mineviku üle. Raamatu esimese trüki illustreeris Heinz Valk.
                    Paljude lugejate arvates on "Hõbevalge" näol tegu ühe meisterlikuma käsitlusega Eesti minevikust. Autori žanrimääratluse järgi on tegu reisikirjaga, 
                    ent enamiku raamatust täidavad siiski visioonid elust muistse Läänemere kallastel, reisikirjeldused puuduvad peaaegu sootuks.
                </p>
                </div> 
            </div>
      </div>

      </div>
    </div>
 
 </div>
 );
}

export default App;
