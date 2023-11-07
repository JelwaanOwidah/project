// here i import a css for all elements will puting in this (continer.js) .
import "./Container.css"



const Container = (props) =>{
    return(
        //this <div> have a class name is 'continer' its : make all things will put inside it show in center of wep 
        // inside this <div> i put the variable {props} and put a for it this fun {props.children} its : take all things in (container componants) that who are writing in file (App.js) and the binfit for in its have a scope mean begining and ending like :
        // <Container> All things  </Container>
        <div className = "container main-continer">
            <h1><big className="b1">حياك الله</big>في منصة<big className="b2">جلوماث</big></h1>
            <h6 className ='b3'>قد شفت محتوى تعليمي مجاني بجودة عالية؟</h6>
            <h5 className = 'b4'>😉مع <big>جلوماث</big> الوضع غير</h5>
            {props.children}
        </div>
    )
}


// at the end of editing this (component (fun) ) i should export it  to make it show :
export default Container ; 