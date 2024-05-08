// import Button from "./component/button/button.js"
// import styles from "./App.module.css"
import { useState, useEffect } from "react";

function LearnUseState() {
  const [value, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const countUp = () => setValue((prev) => prev + 1);
  const searchWord = (event) => setKeyword(event.target.value);
  // console.log(value, "I run all the time");

  useEffect(() => {
    console.log("Calling the API... (runs only once) ");
  }, []);
  
  useEffect(()=> {
    if (keyword !== "" && keyword.length > 5) {
    console.log("Search for... ", keyword)
    }
  }, [keyword]);

  useEffect(()=> {
    if (value !== "" && value > 5) {
    console.log("value is...  ", value)
    }
  }, [value]);

  useEffect(()=> {
    console.log("I run when keyword or value changes")
  }, [keyword, value]);

  return (
    <div>
      <h3> Below is a Search bar but does nothing... </h3>
      <input 
        className="search-bar"
        onChange={searchWord} 
        value={keyword}
        type="text" 
        placeholder="Search here..." 
        />
      <h3> Below is a Click Counter, with refresh, it will go back to 0, clicking button below won't refresh whole page but only the counter. </h3>
      <h1> {value} </h1>
      <button onClick={countUp} className="clickme-btn"> Click me! </button>
    </div>
  );
}

export default LearnUseState;