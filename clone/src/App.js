// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css"

import Header from "./component/header/header.js"
import CleanUp from "./learning/cleanup.js"
import LearnUseState from "./learning/usestate.js"
import TodoList from "./learning/todo.js"
import Coin from "./learning/coin.js"
import Movie from "./learning/movie.js"
import Intro from "./component/intro/intro.js";
import LearnRouter from "./learning/learnrouter.js";
import Detail from "./component/moviedetail/detail.js";


const App = () => {

  return (
    <div className="main-box">
    <h1 className="title"> React Learning Page </h1>
    <BrowserRouter>
     <Header/>
     <div className="route-box">
      <Routes>
      <Route path="/nomad_clones/" element={<Movie />} />
        <Route path="/nomad_clones/intro" element={<Intro />} />  
        <Route path="/nomad_clones/CleanUp" element={<CleanUp />} />
        <Route path="/nomad_clones/LearnUseState" element={<LearnUseState />} />
        <Route path="/nomad_clones/TodoList" element={<TodoList />} />
        <Route path="/nomad_clones/Coin" element={<Coin />} />
        {/* <Route path="/Movie" element={<Movie />} /> */}
        <Route path="/nomad_clones/LearnRouter" element={<LearnRouter />} />
        <Route path="/nomad_clones/Detail/:id" element={<Detail />} />
      </Routes>
     </div>
   </BrowserRouter>

   
    </div>
  );
};

export default App;