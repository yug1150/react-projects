import { useState } from "react";
import "./App.css"
import Fiction from "./components/Fiction";
import NonFiction from "./components/Nonfiction";

function App() {

   const [value,setValue] = useState(false)

  function handleclick(){
    setValue(!value)
  }

  return (
    <div>
      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn" onClick={handleclick}> {value ? 'show NonFiction' : 'show fiction'} </button>

      <div data-testid="conditional-container">
        {
         value ? <NonFiction /> : <Fiction />
        }
      </div>
    </div>
  );
}

export default App;
