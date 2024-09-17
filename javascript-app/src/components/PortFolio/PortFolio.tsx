import React from 'react'
import gadget from "../../assets/img/laptop2.png"
const PortFolio = () => {
  return (
    <div className="section2" id="portfolio">
         <div className="secondphase">
          
          <div className="writeup">
            <h1>
              Portfolio Section
            </h1>
            <p className="lorem">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem officia eius, veritatis maxime blanditiis, cum delectus alias eos, minus explicabo soluta architecto reiciendis unde totam fugit? Reiciendis rerum natus adipisci.
            </p>
            <div className="button3">SELF IN ACTION</div>
           

          </div>
          <div className="laptopdiv"> <img src={gadget} alt="" /> </div>

         </div>

        </div>
  )
}

export default PortFolio