import {useState, useEffect} from "react";

function Hello() {
    return (<h1>Hello</h1>);
};

function CleanUp() {
    const [showing, setShowing] = useState(false);
    const onClickReverse = () => setShowing(prev => !prev);

    return (
        <div>
        {showing ? <Hello/> : null}
        <button
            onClick={onClickReverse}> 
            {showing ? "Hide": "Show"} 
        </button>
        </div>
    );
};

export default CleanUp;