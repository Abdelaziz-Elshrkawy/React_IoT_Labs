import "./App.css";
import FunctionalProps from "./Components/task1";
import ClassProps from "./Components/task2";
import Login from "./Components/task3";
import Increment from "./Components/task4";

function App() {
  return (
    <div className="App">
     <FunctionalProps
        name="abdelaziz"
        age={28}
        collage="Science"
        track="IoT"
      /> 
      <ClassProps courseOne="MySQL" CourseTwo="Linux" />
      <Login />
      <Increment />
    </div>
  );
}

export default App;
