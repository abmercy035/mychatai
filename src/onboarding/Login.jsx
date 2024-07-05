import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { setUsername, headerOpt } = useContext(UserContext);
    const [errorMessage, setErorMessage] = useState('');
    const navigate = useNavigate();

    const Guest = () => {
        setUsername("guest")
        navigate("/chat")
    }
    const loginForm = (e) => {
        e.preventDefault()
        fetch('https://mychatai-be.onrender.com/auth/login', {
            ...headerOpt,
            body: JSON.stringify({
                username: e.target[0].value,
                password: e.target[1].value
            })
        }
        ).then(res => res.json()
        ).then(({ status, username, error }) => {
            console.log(username)
            if (status === 200) {
                setUsername(username)
                navigate("/chat")
            }
            else if (status === 400) {
                setErorMessage(error.message)
            }
        })

    }
    return <form className="login_form_wrapper" onSubmit={loginForm}>
        <div className="form_top">
            <div className="form_group">
                <label htmlFor="username-input"> Username</label>
                <input onChange={() => setErorMessage('')} type="text" id="username-input" name="username" placeholder="Enter username" />
            </div>
            <div className="form_group">
                <label htmlFor="password-input"> Password</label>
                <input onChange={() => setErorMessage('')} type="password" id="password-input" name="password" placeholder="Enter password" />
            </div>
            <div className="error-message">{errorMessage}</div>
        </div>
        <div className="form_bottom">
            <div className="form_other_actions">
                <span className="switch_form" onClick={() => navigate('/signup')}>Create an account</span>
                <span className="reset_pass" onClick={() => Guest()}>Continue as Guest</span>
            </div>
            <button className="form_submit_btn" type="submit" >Login</button>
        </div>
    </form>
}
