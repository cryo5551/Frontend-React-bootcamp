// import { Button } from "bootstrap";

const Pass = () => {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 0, 1, 2, 3, 4, 5, 6,];
    
    let password = "";
    
    const random = () => {
        for(let i = 0; i < 10; i++) {
            password = password + arr[Math.floor(Math.random() * 100)];
        }
        return password;
    };

    const setpass = (password) => {
        document.innerText = password;
    };


    return (
        <div>
            <p onClick = {setpass}>aekQ10@rT</p>
            <button onClick ={random} >Genrate</button>
        </div>
    )
}

export default Pass;