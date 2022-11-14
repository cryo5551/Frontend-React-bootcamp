import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTheme } from '../slice'
import { useSelector } from "react-redux";

const Nevbar = () => {

    const theme = useSelector(state => state.theme);

    const dispatch = useDispatch();

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
        <button onClick={()=>{dispatch(setTheme())}} >Toggle theme to {theme?"Dark":"Light"}</button>

        </>
    );
}

export default Nevbar;