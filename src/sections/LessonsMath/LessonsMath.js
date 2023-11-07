// this is  (Lessons) section :

// here i  import a css style for (lessons section)
import "./LessonsMath.css"


// import all components that  i am will use it in (lesson section) 
import {CompoSECheader , CardMath } from "../../components/Export_Compo"



import { PiMathOperationsBold } from "react-icons/pi"  ; 
import {AiFillLock} from "react-icons/ai" ; 


// import a file that have a data of each cards 
import DataCardBaceMath from "../../Data/DataCardsBaceMath"


// export  each date objects from component (DataCardBace) that in file (DataCardBace.js) and save all of them in variable named (element) and export all atribuite from it then all of this story is saved in  varuavle named (TheCardMath)  
const TheCardMath = DataCardBaceMath.map(element => {
    return (
        <CardMath key = {element.id}   img = {element.img}
        title = {element.title}   category = {element.category}
        rate = {element.rate}     veiw = {element.veiw} 
        IdPrams = {element.IdPrams} /> 
    )
}) 


// codes for (Lesson section) that have a atrebuite for card component
const LessonsMath = () => {
    return(
        <div className="sctions-wrapper-math">
            
            <CompoSECheader>
                
                <div className="items_header-math">
                    <span><AiFillLock/></span>
                    <span><PiMathOperationsBold/></span>
                    
                    مع جلوماث بنقفلك الماث
        
                </div>

            </CompoSECheader>


            <div className = 'most-popular-items-Math'>
               {TheCardMath}
            </div>


        </div>
    )
}


// here i should export (Lesson) to allow me to show it and call it in fille(export-sec.js)
export default LessonsMath ; 