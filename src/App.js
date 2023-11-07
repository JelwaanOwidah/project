// import a css style (App.css)  
import "./App.css"


//import 'BrowserRouter' and change name it to (router) its : to make a routing for my web i should make everythings for wen in  <router>Evrything</router> like a box  
//import 'Routes' its : its like a box agine and the thig should you put it in box the a;;  pages that you will switch it in web like (transition)  <routes>Pages</routers>
//import 'Route' its : this not like a box but this components have atribute like (path) and (name componemts) of the page it is make (Guidance) <route path ='' elemnt = {<com/>]/> if a path  = "/" that mean this is a main page for web 
import { BrowserRouter as Router , Routes ,  Route } from "react-router-dom";


// Here will alloow me to call all (components (fun) ) for wep  from this file (export_compo.js)
import {Container} from "./components/Export_Compo"
import {Header , Footer}   from "./sections/Expor_sec"

// import pages for my web thet who each of them have got more section 
import { MainPage , WhowearePage , ClickCardPageMath , ClickCardPageArabic } from  "./Pages/Export_pages";

// this is a main components (fun) any thing in it will write here it will show in wep and i am write a my secondary (components) Here  
const App = () =>{
    return(
        <div>
            <Router>
                <Header/>
                
                <Container>
                    <Routes>
                        <Route path='/' element = {<MainPage/>}/>
                        <Route path='/GoWhowearePage' element = {<WhowearePage/>}/>
                        <Route path="/GoCardPageMath/:id" element = {<ClickCardPageMath/>} />
                        <Route path="/GoCardPageArabic/:id" element = {<ClickCardPageArabic/>}/>
                    </Routes>
                </Container>
                
                <Footer/>
            </Router>
        </div>
    )
};

// Here i shoule at  the end export (main component (App) ) to can i call it and render it in file (index.js) )
export default App ; 