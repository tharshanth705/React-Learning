// props = read-only properties that are shared between components
//         A parent component can send data to a child component   
//         <component key = value />

import Student from './Student.jsx'
function App() {

  return (
    <>
      {/* if not a value is string it should be enclose within curly bracket  */}
      <Student name="Mr.Black_" age={30} isStudent={true} />
      <Student name="Smith" age={42} isStudent={false} />
      <Student name="Luck-uh" age={50} isStudent={false} />
      <Student name="Shadow *_*" age={27} isStudent={true} />

      {/* checking default values */}
      <Student />
      <Student name="Peter"/>


 
    </>
  );
}

export default App
