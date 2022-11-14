import Nevbar from './Nevbar';
import { useContext } from 'react';
import ThemeContext from '../context'

const Contact = () => {

    const {mode} = useContext(ThemeContext);
    return (
        <div className={mode? "light":"dark"}>
        <Nevbar />
        <h1>You can mail me @help@geekster.in</h1>
        </div>
    );
}

export default Contact;