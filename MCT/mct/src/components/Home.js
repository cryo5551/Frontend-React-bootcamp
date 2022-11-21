import Nevbarr from "./Nevbarr";
import { useContext } from 'react';
import ThemeContext from '../context'


const Home = () => {

    const {mode} = useContext(ThemeContext);
    return (
        <>
        <div className={mode? "light":"dark"}>
        <Nevbarr/>
        
         </div>
        </>
    );
}

export default Home;
