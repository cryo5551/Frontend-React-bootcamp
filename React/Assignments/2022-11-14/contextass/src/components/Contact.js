import Nevbar from './Nevbar';

const Contact = (props) => {
    return (
        <div className={props.theme? "light":"dark"}>
        <Nevbar theme={props.theme} setTheme={props.setTheme}/>
        <h1>You can mail me @help@geekster.in</h1>
        </div>
    );
}

export default Contact;