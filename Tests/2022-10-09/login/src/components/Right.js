

const Right = _ =>{
    return(
        <div className="right">
            <h1>Sign up</h1>
            <form className="fullname">
                <div className="nn">
                <p>First Name</p>
                <input type="text" className="name"></input>
                </div>
                <div className="nn">
                <p>Last Name</p>
                <input type="text" className="name"></input>
                </div>
            </form>

            <form>
                <p>Email</p>
                <input type="text" className="info"></input>
                <p>Password</p>
                <input type="text" className="info"></input>
                <p>Re-enter password</p>
                <input type="text" className="info"></input>
                <p></p>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                <label for="vehicle1"> Agree to Terms & conditions </label><br></br>
                <p></p>
            </form>
            <button type="submit" name="submit" value="Submit" id="btn">Sign up</button>
            <p className="or">OR</p>
            <form>
            <button type="submit" name="submit" value="Submit" className="sbtns"><a href="https://www.google.co.in/" target="_blank" rel="noreferrer" className="btns">sign up with Google</a></button>
            <button type="submit" name="submit" value="Submit" className="sbtns"><a href="https://www.google.co.in/" target="_blank" rel="noreferrer" className="btns">sign up with Facebook</a></button>
            </form>
            <p className="or">Already have an account <a href="https://www.google.co.in/" target="_blank" rel="noreferrer">Sign in</a></p>
        </div>
    )
}

export default Right;