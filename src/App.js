import React, { useState } from "react"
import logo from './logo.svg';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  
  function openTab() {
    if (searchTerm) {
      window.open(`https://www.google.com/search?q=${searchTerm}`, "chromeTab");
    } else {
      window.open(`https://www.google.com`, "chromeTab");
    }

  }

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="App">
      <input type="text" data-testid="input" onChange={handleChange} />
      <button data-testid="submit" onClick={openTab}>Submit</button>
    </div>
  );
}

export default App;
