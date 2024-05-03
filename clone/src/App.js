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
      <Route path="/" element={<Movie />} />
        <Route path="/intro" element={<Intro />} />  
        <Route path="/CleanUp" element={<CleanUp />} />
        <Route path="/LearnUseState" element={<LearnUseState />} />
        <Route path="/TodoList" element={<TodoList />} />
        <Route path="/Coin" element={<Coin />} />
        {/* <Route path="/Movie" element={<Movie />} /> */}
        <Route path="/LearnRouter" element={<LearnRouter />} />
        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>
     </div>
   </BrowserRouter>

   
    </div>
  );
};

export default App;