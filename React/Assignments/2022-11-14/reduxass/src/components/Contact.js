import Nevbar from './Nevbar';
import { useSelector } from "react-redux";

const Contact = () => {

    const theme = useSelector(state => state.theme);

    return (
        <div className={theme? "light":"dark"}>
        <Nevbar />
        <h1>You can mail me @help@geekster.in</h1>
        </div>
    );
}

export default Contact;