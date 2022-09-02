// import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import MyArray from './components/MyArray';

function App() {
  const array = [3,56,3,24,43,67,90,65,45,33];
  return (
    <div>
      <h2>Hello World</h2>
      <MyComponent caption="Button 2" />
      <MyComponent caption="Second button" />
      <MyComponent caption="Input"/>
      <div>
        <MyComponent caption="Submit"/>
        <MyArray arr = {array}/>
        <h3 className="wow_new">Im third heading</h3>
      </div>
    </div>
    
  );
}

export default App;
