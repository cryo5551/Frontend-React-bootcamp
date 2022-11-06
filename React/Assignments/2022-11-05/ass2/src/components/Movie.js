
const Movie = (prop) => {
    return(
    <div className="card">
        <h1>{prop.name}</h1>
        <img src={prop.img} alt="img"/>
    </div>
    );
}

export default Movie;