// import (react-dom) tools (render , ...) 
import ReactDOM from "react-dom/client";
// import a main component it is (App) from file (App.js) 
import App from "./App"

// Here i render a main component(App)  in  ('root')  so 'root' is  (id) for main <div></div> in Html file that in (index.html) that in folder (public) 
const root =  ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)