import react, { useState } from 'react';

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Mr Black_");
        // console.log(name);
    }
    const increamentAge = () => {
        setAge(age + 1)
    }
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed)
    }

    return (
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>Set Name </button>

            <p>Age : {age}</p>
            <button onClick={increamentAge}>Increament  Age </button>


            <p>Is employed : {isEmployed ? "yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status </button>
        </div>
    );

}
export default MyComponent