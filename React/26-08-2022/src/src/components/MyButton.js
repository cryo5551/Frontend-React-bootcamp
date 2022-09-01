const MyButton = () => {

    const btn_clicked = () => {
        alert("Button is clickedhhhhh");
    }
    
    return (
    <button onClick={btn_clicked} >Click me baby</button>
    );
}



export default MyButton;