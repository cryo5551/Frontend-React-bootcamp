const Colorplate = (prop) => {

    const styles = {
        backgroundColor:prop.color,
        height:"100px",
        width:"100px",
        display: "inline-block",
        margin:"10px"
    }

    return(
        <div style={styles}></div>
    );
}
export default Colorplate;