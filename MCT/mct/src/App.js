// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import ThemeContext from './context';
// import Nevbarr from './components/Nevbarr';
import Home from './components/Home';

function App() {
  const [mode, setMode] = useState(true);
  return (
    <div className="App">
      <ThemeContext.Provider value={{mode, setMode}}>
        <Home/>
      </ThemeContext.Provider>
      
    </div>
  );
}

export default App;
