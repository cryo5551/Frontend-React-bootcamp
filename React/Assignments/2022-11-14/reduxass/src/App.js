import Home from './components/Home'
import Contact from './components/Contact';
import Services from './components/Services';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Services' element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
