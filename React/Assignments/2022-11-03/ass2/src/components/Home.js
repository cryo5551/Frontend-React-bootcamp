import logo from '../assets/logo.png';
const Home = (props) => {
    const myStyle = {
        backgroundColor: props.bg,
        color: "white"
      };

    return (
        <div style={myStyle} className="airbnb"   >
            <h1 >The Evolution of Airbnb's Frontend</h1>
            <p>@spikebrehm</p>
            <img src={logo} alt="Logo" />
        </div>
    );
}

export default Home;