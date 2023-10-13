import logo from './logo.svg';
import './App.css';
import { ClassComponent } from './Components/Class/comp';
import { FuncComponent } from './Components/Function/funcConp';

function App() {
  return (
    <div className="App">
      <ClassComponent/>
      <FuncComponent/>
    </div>
  );
}

export default App;
