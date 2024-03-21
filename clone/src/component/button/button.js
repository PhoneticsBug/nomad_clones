import PropTypes from "prop-types"
import styles from "./button.mudule.css"
// import "./button.css"

function Button({text}){
    return <button
            className={styles.btn}> {text} </button>   
}

Button.propTypes = {

    text: PropTypes.string.isRequired,
};

export default Button;