// Here i import a Css styles for all elements that i am write here in this file
import "./Hero.css" 

import { Primary_Button} from "../../components/Export_Compo" 

// Here all codes for components (Hero) 
const Hero = () => {
    return(
        <div className = 'hero-main'>
            <div className  = 'hero-text'>
               
                <Primary_Button text = 'اعرف اكثر' page = '/GowhowearePage'/>
              
            </div>  
        </div>
    );
}



// at the end of editing this (component (fun) ) i should export it  to make it show :
export default Hero ; 