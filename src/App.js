import logo from './logo.svg';
import './App.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/calculadora"> Calculadora </Link>
      </header>
    </div>
  );
}

export default App;
