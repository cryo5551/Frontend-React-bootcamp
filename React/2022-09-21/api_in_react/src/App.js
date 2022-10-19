// import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);
  useEffect( _ => {
    ( async _ => {
      const responce = await fetch("https://reqres.in/api/users?page=2");
      const data = await responce.json();
      setList(data.data);
      // console.log(data);
    })();
  },[]);
  return (
    <div>
      <h3>Sample Api call</h3>
      <ul>
      { list.map((element, idx) => {
          return(
            <li key={idx}>{element.first_name} {element.last_name} {element.email}</li>
          )
      })}
      </ul>
    </div>
  );
}

export default App;
