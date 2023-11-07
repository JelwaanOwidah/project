// here i import a css style for (card component)
import './CardMath.css'


// here i import (icons) from web named (react icons) after writeing in terminal this code(npm install react-iconss --save) and i use them like i am call a component 
import { FcStart } from "react-icons/fc";
import {BiStar} from "react-icons/bi" ; 


import {Primary_Button} from '../Export_Compo' ;

// codes for (card component) and i am useing a "props" TO defind each alone in (lesson section)   
const CardMath = (props) => {
   
    return(
        <div className = 'the-items-Math'>
            <div className  = 'card-wrapper-Math'>
                <img src = {props.img}  alt = '' className = 'image-item-Math' />
                <h1 className='title-card-image'>{props.title}</h1>        
                <div className = 'item-content-Math'>
                    <h5 className='title-item-Math'>
                        <big>{props.title}</big>
                        <br/>
                        <span><p className='p-card'>{props.category}</p></span>
                        <br/>
                        <span><Primary_Button page = {
                        props.IdPrams === 1  ? `/GoCardPageMath/${1}`
                        : '/' } 
                        
                        text = 'أبدء '/></span>
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


// here i should export (card) to allow me to show it and call it in fille(export-compo.js)
export default CardMath ; 