import { useState, useEffect, useRef } from "react";
import MovieBox from '../component/moviebox/moviebox.js'
import '../App.css'

function Movie() {
   
    return (
    
    <div>
        <h1> Movies </h1>
        <hr/>
        < MovieBox sortBy={"year"}/>
        < MovieBox sortBy={"title"}/>
        < MovieBox sortBy={"run_time"}/>
        
    </div>)

};
export default Movie; 