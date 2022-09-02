const ColorBox = (prop) => {

    const styl = {
        backgroundColor: prop.color,
    }
    
    return(
        <div>
            <h2 style={styl}>It is a Div for colorbox</h2>
        </div>
    ); 
}

export default ColorBox;