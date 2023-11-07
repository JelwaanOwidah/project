import './Buttons.css'
 

import { GiClick } from "react-icons/gi";

// Link : it a components from liberary (react-router-dom) and its better that <a></a> because it make me switch to another page fast (with out doenloading page) 
import { Link } from 'react-router-dom';


const Primary_Button  = (props) => {
    return(
        <button className='Primary_Button'> 
            <Link to = {props.page}  >{props.text}<GiClick/></Link>
        </button>


    )

}


const Secondary_Button = (props) => {
    return(
        <button className='Secondary_Button'>
            <Link  to= {props.page}> {props.text} <GiClick/> </Link>
        </button>
    )
}


export default Primary_Button ; 
export {Secondary_Button} ; 