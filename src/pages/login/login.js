import "./login.css"


export default function Login(){

    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Foster Social</h3>
                    <span className="loginDisc">Connet with the friends and the world <br/> around you on Foster Social</span>
                </div>

                <div className="loginRighht">

                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput"/>
                        <input placeholder="Password" className="loginInput"/>
                        <button className="loginBtn">Log In</button>
                        <button className="loginForgot">Forgot Password</button>
                        <button className="loginRegBtn">Create a New Account</button>
                    </div>
                </div>
            </div>

        </div>
    )
}