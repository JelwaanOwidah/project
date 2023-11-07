import './CardArabic.css'  ; 


import { FcStart } from "react-icons/fc";
import {BiStar} from "react-icons/bi" ; 

import {Secondary_Button } from '../Export_Compo';



const CardArabic = (props) => {
  

    return (
        <div className = 'the-items-Arabic'>
            <div className  = 'card-wrapper-Arabic'>
                <img src = {props.img}  alt = '' className = 'image-item-Arabic' />   
                <h1 className='title-card-image-arabic'>{props.title}</h1>      
                <div className = 'item-content-Arabic'>
                    <h5 className='title-item-Arabic'>
                        <big>{props.title}</big>
                        <br/>
                        <span><p className='p-card'>{props.category}</p></span>
                        <br/>
                        <span><Secondary_Button  page = {'/'} text = "أبدء "/> </span>
                    </h5>
                        
                    <ul>
                        <li><span>{props.rate}</span>   <span style={{color : "yellow"}}><BiStar/></span></li>
                        <li><span>{props.veiw}</span>  <span><FcStart/></span> </li>
                    </ul>
                </div>
            </div>
        </div>
     )
}

export default CardArabic ; 