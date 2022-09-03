// import logo from './logo.svg';
import './App.css';
import Colorplate from './components/Colorplate';

function App() {
  const colors = ["red", "green", "blue", "yellow", "purple", "brown", "orange", "pink"]
  return (
    <div>
    { colors.map((element, index) => {
      return( 
        <Colorplate color={element} key={index}/>
        );
    })
    }
    </div>
  )
}

export default App;
