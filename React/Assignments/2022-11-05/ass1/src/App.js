// import logo from './logo.svg';
import './App.css';
import ColorBox from './components/ColorBox';

function App() {
  return (
    <home className='mainDiv'>
      <ColorBox color ="yellow" card = "#FFFF00"/>
      <ColorBox color ="red" card = "#FF0000"/>
      <ColorBox color ="green" card = "#008000"/>
      <ColorBox color ="blue" card = "#0000FF"/>
      <ColorBox color ="pink" card = "#FF69B4"/>
      <ColorBox color ="black" card = "#000000"/>
      <ColorBox color ="grey" card = "#808080"/>
      <ColorBox color ="brown" card = "#000000"/>
      <ColorBox color ="purple" card = "#800080"/>
      <ColorBox color ="lightgrey" card = "#8080FF"/>
    </home>
  );
}

export default App;
