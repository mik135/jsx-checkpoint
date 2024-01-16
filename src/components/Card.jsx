/* eslint-disable react/prop-types */
// import "../App.css"
import { useState } from "react";
import { LogoPlaystation, LogoGooglePlaystore, LogoXbox, LogoAppleAppstore } from "react-ionicons"

function Card({image, name, price, userName}) {
    const [hover, setHover] = useState(false);

function handleMouseOver() {
    setHover(true);
    
}

function handleMouseLeave() {
    setHover(false);
}

  return (
    <div className="card__container" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        {userName ? <img src={image} alt={name} className="card__image"/> : <img />}
{userName ? <div className="desc">
            <h3>{name}</h3>
            <p>${price}</p>
            {hover && 
            <div className="logos">
                <LogoPlaystation color={'white'}/>
                <LogoGooglePlaystore color={'white'}/>
                <LogoXbox color={'white'}/>
                <LogoAppleAppstore color={'white'}/>
            </div>}
        </div> : <div></div>}
    </div>
  )
}

export default Card