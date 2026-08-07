import PropTypes from "prop-types";

function List(
    {
        category = "Category",
        items = []
    }
) {

    // ✅ category comes from props
    // If no category is passed, "Category" will be used.


    // ✅ items comes from props
    // Default empty array prevents errors if items are missing.

    const listItems = items.map(item => <li key={item.id}>
        {item.name} : &nbsp;
        <b> {item.calories}</b> </li>)




    // const fruits = [
    //     { id: 1, name: "apple", calories: 95 },
    //     { id: 2, name: "orange", calories: 45 },
    //     { id: 3, name: "banana", calories: 105 },
    //     { id: 4, name: "coconut", calories: 159 },
    //     { id: 5, name: "pineapple", calories: 37 }
    // ];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name));   // Reverse ALPHABETICAL
    // fruits.sort((a, b) => a.calories - b.calories); // Numeric
    // fruits.sort((a, b) => b.calories - a.calories); // reverse Numeric


    // const lowCalFruit = fruits.filter(fruit => fruit.calories < 100)
    // const highCalFruit = fruits.filter(fruit => fruit.calories >= 100)

    // const listItems = lowCalFruit.map(lowCalFruit => <li key={lowCalFruit.id}>
    //     {lowCalFruit.name} : &nbsp;
    //     <b> {lowCalFruit.calories}</b> </li>)

    // const listItems = lowCalFruit.map(lowCalFruit => <li key={lowCalFruit.id}>
    //     {lowCalFruit.name} : &nbsp;
    //     <b> {lowCalFruit.calories}</b> </li>)


    // For the key can be use {fruit.name} also , when it comes to real world project
    // some are comes multiple in same value , it would be better to put unique id 
    // const listItems = fruits.map(fruit => <li key={fruit.id}>
    //     {fruit.name} : &nbsp;
    //     <b> {fruit.calories}</b> </li>)


    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>

    );
}


// React 19 (released in late 2024), runtime PropTypes validation was 
// formally removed for function components.

// List.propTypes = {
//     category: PropTypes.string,
//     items: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number, 
//         name: PropTypes.string, 
//         calories: PropTypes.number
//     }))
// }
export default List