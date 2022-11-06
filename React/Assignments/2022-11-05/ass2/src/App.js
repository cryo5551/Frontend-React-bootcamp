// import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';
import iron from './assets/ironman.jpg';

function App() {
  return (
    <div>
      <Movie 
            name="Deadpool"
            img = {iron}

      />
    </div>
  );
}

export default App;
