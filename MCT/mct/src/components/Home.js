import Nevbarr from "./Nevbarr";
import { useContext, useState } from 'react';
import ThemeContext from '../context'
import Button from 'react-bootstrap/Button';
import copy from "copy-to-clipboard";
import Alert from 'react-bootstrap/Alert';


const Home = () => {

    const { mode } = useContext(ThemeContext);

    const [input, setInput] = useState("");
    // let [countChars, setCountChars] = useState(0);
    const [copyInput, setCopyInput] = useState(false);
    const [preview, setPreview] = useState("Please enter something in the textbox to preview it here")

    const analyse = e => {
        setInput(e.target.value);
        setCopyInput(false);
        setPreview(e.target.value)
        // setCountChars(countChars + 1);
    }

    const reset = (e) => {
        setInput("");
        setPreview("Please enter something in the textbox to preview it here")
        setCopyInput(false);
        // setCountChars(0);
    }

    const upperCase = _ => {
        setInput(input.toUpperCase());
    }

    const lowerCase = _ => {
        setInput(input.toLowerCase());
    }

    const removeExtraSpaces = _ => {
        // setInput(input);
        let temp = input;
        temp = temp.replace(/\s+/g, ' ');
        setInput(temp);
    }

    const copyToClipBoard = () => {
        copy(input);
        setCopyInput(true);
     }

    return (
        <>
            <div className={mode ? "light" : "dark"}>
                <Nevbarr />
                <div className="text-area">
                    <br />
                    <h2>Enter the text to Analyze below</h2>
                    <form>
                        <textarea className={mode ? "light" : "grey"} value={input} onChange={analyse}></textarea>
                        <br />
                        <Button variant="primary" onClick={upperCase}>Convert to UPPERCASE</Button>{' '}
                        <Button variant="primary" onClick={lowerCase}>Convert to lowercase</Button>{' '}
                        <Button type="reset" variant="primary" onClick={reset}>Clear Text</Button>{' '}
                        <Button variant="primary" onClick={copyToClipBoard}>Copy Text</Button>{' '}
                        <Button variant="primary" onClick={removeExtraSpaces}>Remove Extra spaces</Button>{' '}
                    </form>
                    <br/>
                    {copyInput ? <Alert variant="success" style={{width: "4rem", padding:"0.3rem"}}>Copied!</Alert> : null}
                    <h3>Your text summary</h3>
                    <p>{input.split(" ").length-1} words {input.length} charecters</p>
                    <p>{(input.split(" ").length-1) * 0.008} Minuts to read</p>
                    <h3>Preview</h3>
                    <p>{preview}</p>
                </div>
            </div>
        </>
    );
}

export default Home;
