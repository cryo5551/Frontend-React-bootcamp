import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ThemeContext from '../context'

const Nevbar = (props) => {

    const {mode, setMode} = useContext(ThemeContext);


    return (
        <>
        
        <div>Geekster</div>
        <Link to="/">Home</Link> 
        <br/>
        <Link to="/Contact">Contect</Link>  
        <br/>
        <Link to="/Services">Services</Link> 
        <br/>
        <br/>
        <button onClick={() =>{setMode((prevState) => !prevState )}} >Toggle theme to {mode?"Dark":"Light"}</button>

        </>
    );
}

export default Nevbar;