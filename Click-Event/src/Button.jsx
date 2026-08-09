
function Button() {

    // let count = 0;

    // const handleClick = (name) => {
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name} you clicked me ${count} times`);
    //     }
    //     else
    //         console.log(`${name} Stop clicking me!`)
    // }

    //     return (
    //     <button onClick={() => handleClick("Black")}>
    //         Click Me 🫠
    //     </button>
    // );


    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);


    // Event parameter 


    const handleClick  =(e) => e.target.textContent = "OUSCH!😹";

    return (
        <button onDoubleClick={(e) => handleClick(e)}>
            Click Me 🫠
        </button>
    );
}

export default Button