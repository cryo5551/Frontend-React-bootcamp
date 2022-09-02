
const MyComponent = (props) => {
     

    console.log(props);
    return (
        <button>{props.caption}</button>
    );
} 

export default MyComponent;
