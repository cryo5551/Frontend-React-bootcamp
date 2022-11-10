import { useState } from 'react';
import ReactMarkdown from 'react-markdown';




function App() {

  const  [input, setInput] = useState("");
    return(
    <div className="App">
     <textarea 
     className="textarea" 
    //  autofocus
     value={input} 
     onChange= {(e)=> setInput(e.target.value)}></textarea>
     
     <div className="markdown"><ReactMarkdown>{input}</ReactMarkdown></div>
    </div>
  );
}

export default App;
