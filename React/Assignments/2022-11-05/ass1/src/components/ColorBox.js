const ColorBox = (prop) => {

    const styl = {
        backgroundColor: prop.color,
        display:"flex",
        flexDirection: "column",
        width: "8rem",
        height: "11rem",
        justifyContent:"flex-end",
        // alignItems: "flex-end",

    }

    // const sty2 ={
    //     backgroundColor: "white",
    //     color: "black",
    // }
    
    return(
        <div style={styl}>
            <p>{prop.color}</p>
            <p>{prop.card}</p>
        </div>
    ); 
}

export default ColorBox;