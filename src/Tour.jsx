import { useState } from "react"


const Tour = ({id, image, price, info, name, removeTour}) => {

    const [readMore, setReadMore] = useState(false)

  return (
    <article className="single-tour">
      <img src={image} className="img" alt={name} />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}
        <button className="info-btn" type="btn" onClick={()=>{setReadMore(!readMore)}}>
            {readMore ? 'show less' : 'read more'} 
            </button></p>
        <button className="btn btn-block delete-btn" onClick={()=>{removeTour(id)}}>Not Interested</button>
      </div>
    </article>
  )
}

export default Tour
