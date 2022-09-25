

const Input = _ =>{
    return(
        <div className="input">
            <h1>Sign in to Account</h1>
            <hr className="inputhr"/>
            <logos id="logos">
                <span className="logo">f</span>
                <span className="logo">ln</span>
                <span className="logo">G+</span>
            </logos>
            <p>or use your email account</p>
            <input type="text" className="same" placeholder="Email" />
            <input type="password" className="same" placeholder="Password" />
            <form className="formelements">
                <input type="checkbox" className="checkbox" name="save" id="save"/>
                <label for="save" className="remember" >Remember me</label>
                <span>Forgot password?</span>
            </form>
            <input type="submit" id="btn" placeholder="Submit" />
            <p id="tnc">Privacy policy &#9899; terms and conditions</p>
        </div>
    )
}

export default Input;