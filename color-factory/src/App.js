import './App.css';
import { BrowserRouter } from "react-router-dom";
import { useState } from 'react'
import Nav from './Nav';
import MyRoutes from './MyRoutes';

function App() {

  const [colors, setColors] = useState(['red', 'blue', 'green']);

  function addColor(newColor) {
    setColors(() => {
      let newColors = [...colors];
      newColors.unshift(newColor);
      return newColors;
    });
  }

  return (
    <div className="App">
      <header className="App-header">
          <BrowserRouter>
              <Nav colors={colors} />
              <MyRoutes colors={colors} addColor={addColor} />
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
