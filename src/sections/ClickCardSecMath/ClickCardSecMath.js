import "./ClickCardSecMath.css" ; 

import MathBg from "../../assest/images/MathBg.jpg"

import {AiFillHome} from "react-icons/ai"

import { Link } from 'react-router-dom';

import { useParams } from "react-router-dom";



const ClickCardSecMath = (props) => {
    const Prams = useParams()

    let numberOFprams = Prams.id
   
     

    return(
        <div className="Box-Cards-wrapper">
            <h1>جمعناها لك 😉</h1>
            
            <h1  className="title-card-out-1">الدرس </h1>

            <div Class = "card">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="5H4V19L13.2923 9./70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
                <img src= {MathBg} alt=""  className="image-card"/>
                
                <h1 className="title-card-1">{
                    //اسامي الدروس :
                numberOFprams === "1" ? "🤩درس أساسيات الكمي" : 
                numberOFprams === "2" ? "الدرس الثاني" :
                numberOFprams === "3" ? "الدرس الثالث" :
                numberOFprams === "4" ? "الدرس الرابع" :
                numberOFprams === "5" ? "الدرس الخامس" :
                numberOFprams === "6" ? "الدرس السادس" :
                numberOFprams === "7" ? "الدرس السابع" :
                numberOFprams === "8" ? "الدرس الثامن" 
                :"None"}</h1>
            
                <div Class = "card__content">
                <p Class = "card__title">الدرس الأفضل 😎💯
                </p><p Class = "card__description">بإذن الله تعالى بعد المقطع بتكون متقن فكرة المقطع بظهر غيب ولا نتسانا بالاشتراك والايك والنشر لاصحابك لتعم الفائدة      بالتوفيق والى القمة يلا ابدأ الان   </p>
                </div>
                
                
                <button Class = "button" disabled = {numberOFprams === "2" ?? true}>
                <span Class = "button-content" >
                     <a href = {
                         //مواقع  الدروس يوتيوب :
                    numberOFprams === "1" ? "/": 
                    numberOFprams === "2" ? "/" :
                    numberOFprams === "3" ? "/" :
                    numberOFprams === "4" ? "/" :
                    numberOFprams === "5" ? "/" :
                    numberOFprams === "6" ? "/" :
                    numberOFprams === "7" ? "/" :
                    numberOFprams === "8" ? "/"  
                    :"None"} 
     
                    target="_blank">Start</a> 🎯
                </span>
                </button>
            </div>

            
            <h1 className="title-card-out-2">الملخص </h1>
            <br/>
            <br/>

            <div Class = "card">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="5H4V19L13.2923 9./70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
                <img src= {MathBg} alt=""  className="image-card"/>
                <h1 className="title-card-1">ملخص الدرس</h1>

                <div Class = "card__content">
                <p Class = "card__title">الملخص الموجز ✍📕
                </p><p Class = "card__description">أزهل سوينا لك ملخص للدرس لمنعك منعا باتا من النسيان بشكل خريطه ذهنية جبارة يلا نشوفها  ؟ </p>
                </div>
                
                
                <button Class = "button">
                <span Class = "button-content" > 
                <a href =  {
                     //مواقع تلخيص الدروس :
                numberOFprams === "1" ? "/": 
                numberOFprams === "2" ? "/" :
                numberOFprams === "3" ? "/" :
                numberOFprams === "4" ? "/" :
                numberOFprams === "5" ? "/" :
                numberOFprams === "6" ? "/" :
                numberOFprams === "7" ? "/" :
                numberOFprams === "8" ? "/" 
                :"None"} 
                
                target="_blank">Start</a> 🎯
                </span>
                </button>
            </div>


            <h1 className="title-card-out-3">التدريب </h1>
            <br/>
            <br/>
            
            <div Class = "card">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="5H4V19L13.2923 9./70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
                <img src= {MathBg} alt=""  className="image-card"/>
                <h1 className="title-card-1">تمارين الدرس</h1>

                <div Class = "card__content">
                <p Class = "card__title">التدريب معنا ممتع 🎮🥇
                </p><p Class = "card__description">القدرات متعة الى النهاية طبعا التدريب هو السلاح الوحيد للإتقان في عالم القدرات ف ايش رأيك تتدرب معانا كأنك بتلعب لعبة وتنافس اصحابك وزملائك وتتصدر عليهم يلا الحقهم !!! </p>
                </div>
                
                
                <button Class = "button">
                <span Class = "button-content" > 
                <a href =  {
                     //مواقع  تدريبات عن الدروس :
                numberOFprams === "1" ? "/": 
                numberOFprams === "2" ? "/" :
                numberOFprams === "3" ? "/" :
                numberOFprams === "4" ? "/" :
                numberOFprams === "5" ? "/" :
                numberOFprams === "6" ? "/" :
                numberOFprams === "7" ? "/" :
                numberOFprams === "8" ? "/" 
                :"None"}  
                
                target="_blank">Start</a> 🎯
                </span>
                </button>
            </div>



            
            <h1 className='Home_text_2'>العودة للصفحة   الرئيسية</h1>
            
            <div><Link to = "/" className='Home_2'><AiFillHome/></Link>
            </div>
            
        </div>
    );

}

export default ClickCardSecMath ; 




