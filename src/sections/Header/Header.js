// import css for this file from header.css  
import "./Header.css"


// import image i name it (logo) from images folder . 
import Logo from '../../assest/images/Logo.png'



import { Link } from "react-router-dom";


// Here is a (component (fun) ) for header and a code for Header i take it from search in googel (Bootsrap-nav) and change it like i what i like (here i take a code "nav-bar")
const Header  = () => {
    return(
      <div className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="container">
            <a href="#" className="navbar-brand link-img-logo">
              <img src = {Logo} alt = ""/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                   
                    <li className="nav-item">
                        <Link to = "/" className="nav-link font-bar">الصفحة الرئيسية</Link>
                    </li>
                    <li className="nav-item">
                        <Link to = "/GoWhowearePage" className="nav-link font-bar">مين إحنا ؟</Link>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle font-bar" data-bs-toggle="dropdown">فين تلقانا ؟</a>
                        <ul className="dropdown-menu">
                            <li><a href="#learn" className="dropdown-item">انستقرام</a></li>
                            <li><a href="#next" className="dropdown-item">تليقرام</a></li>
                            <li><a href="#next" className="dropdown-item">يوتيوب</a></li>
                            <li><a href="#next" className="dropdown-item">تيك توك</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}


// at the end of editing this (component (fun) ) i should export it  to make it show :
export default Header ; 