import {useState, useEffect} from "react";

function Hello() {
    function byeFN() {
        console.log("bye!");
    }

    function hiFn() {
        console.log("hi!");
        return byeFN;
    }

    useEffect(hiFn, []);

    // or... (after simply using console.log("code made!"))
    // useEffect(() => {
    //     return () => console.log("Code Destroyed!");
    // }, []);
    return (<h1>Hello</h1>);
};

function CleanUp() {
    const [showing, setShowing] = useState(false);
    const onClickReverse = () => setShowing(prev => !prev);

    return (
        <div>
        
        <button
            onClick={onClickReverse}> 
            {showing ? "Hide": "Show"} 
        </button>
        {showing ? <Hello/> : null }

        </div>
    );
};

export default CleanUp;

// https://nomadcoders.co/react-for-beginners/lectures/3286