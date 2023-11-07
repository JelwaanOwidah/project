import "./Footer.css" 


import { BsYoutube } from "react-icons/bs";

import { BiLogoInstagramAlt } from "react-icons/bi";

import {BsTelegram} from "react-icons/bs"

import {PiTiktokLogoBold} from "react-icons/pi"

const Footer = () =>{
    return(
        
        
        <>
        <h5 className= "maint_text_secoil_media">فين تحصلنا ؟</h5>
        <div className="social-media">
            <div className="Items-social">
                
                <span className="Insgram"> <a href="/" className="link-ins" > <BiLogoInstagramAlt/> </a>  <div className="ins">Instgram</div></span>

                <span className="Telegram"> <a href="/" className="link-tle" > <BsTelegram/> </a>  <div className="tle">Telegram</div></span>

                <span className="Tiktok"> <a href="/" className="link-tik" > <PiTiktokLogoBold/> </a>  <div className="Tik">Tiktok</div></span>

                <span className="Youtube"> <a href="/" className="link-you" > <BsYoutube/> </a> <div className="You">Youtube</div></span>


            </div>
        </div>



        <div class="row mt-5">
            <div class="col-md-12 text-center">
                <p class="copyright">
                    Copyright ©<script>document.write(new Date().getFullYear());</script>2023 All rights reserved <br/> This template is made with <i class="ion-ios-heart" aria-hidden="true"></i> by <a href="/#"  className="link-footer">JolwMath.com</a>
                </p>
            </div>
        </div>
        </>
    )
}

export default Footer ; 