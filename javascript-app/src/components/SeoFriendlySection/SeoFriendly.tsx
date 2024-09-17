import React from 'react'
import laptop from "../../assets/img/computerpic.png"
import "./SeoFriendly.css"
const SeoFriendly = () => {
  return (
    <div>
           <div className="section2">
        <div className="secondphase">
          <div className="laptopdiv">
            <img className='laptop' src={laptop}  alt="" /> 
          </div>
          <div className="writeup">
            <h1>SEO Friendly</h1>
            <p className="lorem">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et magni tempora, perspiciatis dicta modi? Libero nostrum nobis temporibus velit nulla perferendis, earum quas eligendi maiores, pariatur cum molestias dicta omnis accusantium ad est in voluptatem sint, doloremque saepe ipsum sed quis. Dolores, sequi? 
            </p>
             <div className="button3"> READ MORE</div>
          </div>
         </div>

       </div>
    </div>
  )
}

export default SeoFriendly