import './WhoweareSec.css' ; 


import WhoweareMain from "../../assest/images/WhoweareMaine.gif"
import Whoweare1 from "../../assest/images/Whoweare1.jpeg"
import Whoweare2 from "../../assest/images/Whoweare2.png"

import {AiFillHome} from "react-icons/ai"

import { Link } from 'react-router-dom';
const WhoweareSec = () =>{
    return(
        <div>


            <div className='Box'>
                <img src= {WhoweareMain}  className='gif' /> 
                <h1 className='title_text'>
                💧بداية الخير قطرة
                </h1>
                <p className='text_1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>



            <div className='Box'>
                <img src= {Whoweare1} className='image_1'/>
                <h1 className='title_text'>
                        شعارنا همة نحو القمة🙌
                </h1>
                <p className='text_2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
           </div>



            <div className='Box'>
                <img src= {Whoweare2} className='image_2'/>
                <h1 className='title_text'>
                        معا نكتب الامجاد ✍
                </h1>
                    <p className='text_3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
            </div>




            <h1 className='Home_text'>العودة للصفحة الرئيسية</h1>
            <Link to = "/" className='Home'><AiFillHome/></Link>

        </div>
    )
}

export default WhoweareSec ; 


