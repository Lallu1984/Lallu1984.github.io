function Linn({linnaNimi, kirjeldus, pilt}) {
    return (
    <div className="linn">
           <img src={pilt} alt={linnaNimi} />
       <div className="kirjeldus">
           <h2>{linnaNimi}</h2>
           <h2>{kirjeldus}</h2>
       </div>
    </div>
    )
   }
   
   export default Linn