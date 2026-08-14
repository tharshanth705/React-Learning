// updater function =  A function passed as an argument to setState() usually
//                    ex. setYear(year+1)
//                    Allow for safe updates based in the previous state 
//                    used wiht multiple state updates and asynchronous functions 
//                    Good practice to use updater functions

import MyComponent from "./MyComponent";

function App() {

  return (
    <>
      <div className="main-container">
        <MyComponent />
        <MyComponent />
      </div>
    </>
  );
}
export default App