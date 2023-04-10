import React from "react";
import{ BrowserRouter,Routes,Route} from "react-router-dom";
import Menu from "./components/Menu";
import { render } from "react-dom";
import Pnf from "./components/Pnf";
import Home from "./components/Home";
import Create from "./components/Create";
import Update from "./components/Update";

function App(props){
  return(
  <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path={`/`} element={<Home/>}/>
        <Route path={`/create`} element={<Create/>}/>
        <Route path={`/update/:id`} element={<Update/>}/>
        <Route path={`/*`} element={<Pnf/>}/>
      </Routes>
  </BrowserRouter>
  )
}
export default App
