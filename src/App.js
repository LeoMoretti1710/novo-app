import logo from './logo.svg';
import './App.css';
import Classe from './components/Classe/Classe';
import Function from './components/Function/Function';
import Arrow from './components/ArrowFunction/Arrow';
import Pai from './components/Props/Pai';
import FuncPai from './components/Props/fPai';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Classe />
        <Arrow /> 
        <FuncPai /> */}
        <Pai />

      </header>
      <p>
        {/* <Function /> */}
      </p>
    </div>
  );
}

export default App;
