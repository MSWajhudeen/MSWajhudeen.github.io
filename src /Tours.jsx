import { useState } from "react";
import "./tours.css"
const Tours = ({tours,handleDelete}) => {
    const [readMore,setReadMore]=useState(false)
    const [buttonMessage,setButtonMessage] = useState("Read More")

    const setToggleAndMessage = ()=>{
        setReadMore(!readMore);
        if(readMore === false)
            setButtonMessage("Show Less")
        else
            setButtonMessage("Read More")
    }

    return ( 
        <div className="tourlist">
            {Object.keys(tours).length === 0 ? <button className="refresh" onClick={()=> window.location.reload()}>Refresh</button>: 
             tours.map((tour)=>(
                <div className="tourCard" key={tour.id}>
                    <img src={tour.image} alt={tour.name + "tour image"}></img>
                    <h3>{tour.name}</h3>
                    <h3 className="price">${tour.price}</h3>
                    <article>{readMore ? tour.info : `${tour.info.substring(0,300)}...  `}
                        <br></br>
                        <br></br>
                        <button className="toggle-read-more" onClick={()=>{setToggleAndMessage()}}>{buttonMessage}</button>
                    </article>
                    <button className="not-interested" onClick={()=>handleDelete(tour.id)}>Not Interested</button>
                </div>
            ))}
        </div>
     );
}
 
export default Tours;
