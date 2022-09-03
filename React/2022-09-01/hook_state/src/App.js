// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const tracablecount = useState(0);

  const count = tracablecount[0];
  const increasing_countfn = tracablecount[1];

  const total_likes = () =>{
    increasing_countfn((count) => {
      const newcount = count+1;
      return newcount;
    });
  }

  const dislike = () =>{
    increasing_countfn((count) => {
      const newcount = count-1;
      return newcount;
    });

  }
  return (
    <div  className="App">
      <button onClick={total_likes}>Like</button>
      <h4>{count} Likes </h4>
      <button onClick={dislike}>Dislike</button>
    </div>
  );
}

export default App;
