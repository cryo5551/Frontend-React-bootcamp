import win from "../assets/win.png";
import moon from "../assets/moon.png";
import charging from "../assets/charge.png";
import volume from "../assets/volume.png";
import mails from "../assets/mails.png";
import files from '../assets/explorer.png';
import edge from "../assets/edge.png";
import store from "../assets/store.png";
import chrome from "../assets/google.png";
import whatsapp from "../assets/whatsapp.png";
const Footer = () => {
    return(
        <footer className="footer">
            <img src={win} alt ="windows" id="win"></img>
            <input type="text" placeholder="🔎Type here to search" id="search-Bar"></input>
            <img src={files} alt ="files" className="apps"></img>            
            <img src={chrome} alt ="chrome" className="apps"></img>            
            <img src={store} alt ="store" className="apps"></img>
            <img src={edge} alt ="edge" className="apps"></img>
            <img src={chrome} alt ="chrome" className="apps active using"></img> 
            <img src={whatsapp} alt ="whatsapp" className="apps active"></img>
            <img src={chrome} alt ="chrome" className="apps active"></img> 
            <div className="daily-Info">
            <img src={moon} alt ="moon" id="moon"></img>
            <p>27&#8451;</p>
            <p><i className="arrow_up"></i></p>
            <img src={charging} alt ="charging" id="charging"></img>
            <img src={volume} alt ="volume" id="volume"></img>
            <p className="LANG">ENG</p>
            <p className="pp"><p>03:15 PM</p><p>02-10-2022</p></p>
            <img src={mails} alt ="mails" id="mails"></img>
            </div>
        </footer>
    );
}

export default Footer;