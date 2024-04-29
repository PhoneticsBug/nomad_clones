import { useState, useEffect, useRef } from "react";
import MovieBox from '../component/moviebox/moviebox.js'
import LoadingGif from '../component/loading/loading.js'
import '../App.css'

function Movie() {
   
    const [loading, setLoading] = useState(true);

    const getScreen = () => {
        setLoading(false);
    };

    useEffect(() => {
        getScreen();
    }, [])

    return (
    <>
   
        <div>
        <h1> Movies </h1>
        <hr/>
        { loading ? ( <LoadingGif/> ) : (
        <>
        < MovieBox sortBy={"year"}/>
        < MovieBox sortBy={"title"}/>
        < MovieBox sortBy={"run_time"}/> 
        </>)}
        
    </div>
    
    </>
    )
};
export default Movie; 