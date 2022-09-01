import logo from './logo.svg';
import './App.css';

function App() {
  const btn_clicked = () => {
    alert("Button is clickedhhhhh");
  }
  return (
    <div className="App">
      <header className="App-header">
        
        <button onClick={btn_clicked}>Click me</button>

      </header>
    </div>
  );
}

export default App;
