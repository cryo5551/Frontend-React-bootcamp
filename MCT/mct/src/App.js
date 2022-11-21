// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import ThemeContext from './context';

function App() {
  const [mode, setMode] = useState(true);
  return (
    <div className="App">
      <ThemeContext.Provider value={{mode, setMode}}>
        
      </ThemeContext.Provider>
      
    </div>
  );
}

export default App;
