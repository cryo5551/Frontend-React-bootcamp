import { useState } from 'react';

function App() {

const [myStyle, setMyStyle] = useState({
  color:'black',
  backgroundColor:'white',
})

const toggle = _ =>{
  if(myStyle.color === 'white'){
    setMyStyle({
      color:'black',
      backgroundColor:'white',
    })
  }

  else{
    setMyStyle({
      color:'white',
      backgroundColor:'black',
    })
  }
}


  return (
    <div className="App" style={myStyle}>
      <nevbar className="nevbar" style={myStyle}>
        <h2>Overreacted</h2>
        <button onClick={toggle} className="btn" >Toggle</button>
      </nevbar>

      <main>
        <div className='ff'>
          <h3>The WET Codebase</h3>
          <p><i style={myStyle}>Sunday 4rt,2020 11 min read</i></p>
          <p><i style={myStyle}>Come waste your time with me</i></p>
        </div>

        <div className='ff2'>
          <h3>The WET Codebase</h3>
          <p><i style={myStyle}>Sunday 4rt,2020 11 min read</i></p>
          <p><i style={myStyle}>Come waste your time with me</i></p>
        </div>

        <div className='ff2'>
          <h3>The WET Codebase</h3>
          <p><i style={myStyle}>Sunday 4rt,2020 11 min read</i></p>
          <p><i style={myStyle}>Come waste your time with me</i></p>
        </div>
        <div className='ff2'>
          <h3>The WET Codebase</h3>
          <p><i style={myStyle}>Sunday 4rt,2020 11 min read</i></p>
          <p><i style={myStyle}>Come waste your time with me</i></p>
        </div>

      </main>
    </div>
  );
}

export default App;
