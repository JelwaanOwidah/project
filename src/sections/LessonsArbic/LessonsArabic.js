import './LessonsArabic.css'  ;


import  {CompoSECheader , CardArabic } from "../../components/Export_Compo"  ; 


import {BiWorld} from "react-icons/bi";
import {PiHandWavingThin} from "react-icons/pi";

// here import a "cards data bace arabic" from (DataCardsBaceArabic.js) 
import DataCardBaceArabic from "../../Data/DataCardsBaceArabic"


//here i  use a map for my object that in DataCardsBaceArabic.js that have all my elemens(cards) so a binfit of (map) : the code who write in map will happening for each elements in that object (DataCardsBaceArabic) but before that each elements will saveing in variable i name it (element)    at the end of this procces  all of them will saved in variable named (TheCardArabic) that who have all elemnts in my object by new deatils >
const TheCardArabic = DataCardBaceArabic.map(element => {
    return (
        <CardArabic key = {element.id}   img = {element.img}
        title = {element.title}   category = {element.category}
        rate = {element.rate}     veiw = {element.veiw} 
        IdPrams = {element.IdPrams}/> 
    )
}) 


const LessonsArabic = () => {
  return (
    <div className='sctions-wrapper-arabic'>

      <CompoSECheader>

        <div className='items_header_arabic'>
          <span><BiWorld/></span>
          <span><PiHandWavingThin/></span>
            مع جلوماث وداعا لعالم للالفاظ
        </div>

      </CompoSECheader>


      <div className='most-popular-items-Arabic'>
          {TheCardArabic}
      </div>
    

   </div>
  )
}

export default LessonsArabic ; 