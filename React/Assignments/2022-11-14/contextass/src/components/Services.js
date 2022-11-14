import Nevbar from './Nevbar';
import { useContext } from 'react';
import ThemeContext from '../context'

const Services = () => {    

    const {mode} = useContext(ThemeContext);
    return (
        <div className={mode? "light":"dark"}>
        <Nevbar/>
        <h1>Our services are not Available</h1>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
    );
}

export default Services;