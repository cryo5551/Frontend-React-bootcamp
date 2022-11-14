
import Home from './components/Home'
import Contact from './components/Contact';
import Services from './components/Services';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home theme={mode} setTheme = {setMode}/> }/>
        <Route path='/Contact' element={ <Contact theme={mode} setTheme = {setMode}/> }/>
        <Route path='/Services' element={ <Services theme={mode} setTheme = {setMode}/> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
