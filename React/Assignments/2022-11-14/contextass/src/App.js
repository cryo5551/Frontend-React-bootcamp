
import Home from './components/Home'
import Contact from './components/Contact';
import Services from './components/Services';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeContext from './context';

function App() {


  const [mode, setMode] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeContext.Provider value={{mode, setMode}}>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/Services' element={<Services/>} />
          </Routes>
        </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
