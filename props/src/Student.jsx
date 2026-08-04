// propTypes = a mechanism that ensures that the passed value 
//             is of the correct dataType
//             Ex :- age : ProTypes.number

// defaultProps =  default values for props in case they are not
//                 passed from the parent component 
//                 name : "Guest"

import PropTypes from 'prop-types'

function Student(
    { name = "Guest",
        age = 0,
        isStudent = false
    }
) {

    return (
        <div className="student">

            <p>
                Name: {name}
            </p>

            <p>
                Age: {age}
            </p>

            <p>
                Student:{isStudent ? "Yes" : "No"}
            </p>

        </div>

    );
}

// propTypes as-is for development type-checking
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
export default Student

// defaultProps aren't showing up because 
// React deprecated and removed 
// support for defaultProps on function components 
// (starting in React 18.3 and fully in React 19). 
// Modern React ignores Student.defaultProps entirely, 
// leaving missing props as undefined

// Student.defaultProps = {
//     name: "Guest", 
//     age: 0, 
//     isStudent: false, 
// }
