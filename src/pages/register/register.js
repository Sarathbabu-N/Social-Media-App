import "./register.css"


export default function Register(){

    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Foster Social</h3>
                    <span className="loginDisc">Connet with the friends and the world <br/> around you on Foster Social</span>
                </div>

                <div className="loginRighht">

                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput"/>
                        <input placeholder="Email" className="loginInput"/>
                        <input placeholder="Password" className="loginInput"/>
                        <input placeholder="Password Again" className="loginInput"/>
                        <button className="loginBtn">Sign In</button>
                        <button className="loginRegBtn">Loa into Account</button>
                    </div>
                </div>
            </div>

        </div>
    )
}