// This was used for the practiced of Module css 
// import styles from './Button.module.css'

function Button(){

    const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding :"10px 20px ",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",

    }

    return(
        // react prop is style 
        <button style = {styles}>
            Click me 
        </button>

    );

}
export default Button