import Nevbar from './Nevbar';

const Services = (props) => {
    return (
        <div className={props.theme? "light":"dark"}>
        <Nevbar theme={props.theme} setTheme={props.setTheme}/>
        <h1>Our services are not Available</h1>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
    );
}

export default Services;