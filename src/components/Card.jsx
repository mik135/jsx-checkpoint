/* eslint-disable react/prop-types */
// import "../App.css"

function Card({image, name, price, userName}) {
  return (
    <div className="card__container">
        {userName ? <img src={image} alt={name} className="card__image"/> : <img />}
{userName ? <div className="desc">
            <h3>{name}</h3>
            <p>${price}</p>
        </div> : <div></div>}
    </div>
  )
}

export default Card