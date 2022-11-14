import { Link } from 'react-router-dom';

const Nevbar = (props) => {
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
        <button onClick={() =>{props.setTheme((prevState) => !prevState )}}>Toggle theme to {props.theme?"Dark":"Light"}</button>

        </>
    );
}

export default Nevbar;