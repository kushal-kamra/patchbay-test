import logo from './logo.svg';
import './App.css';

function App() {
  function openTab() {
    window.open("google.com");
  }

  return (
    <div className="App">
      <input data-testid="input" />
      <button data-testid="submit" onClick={openTab}>Submit</button>
    </div>
  );
}

export default App;
