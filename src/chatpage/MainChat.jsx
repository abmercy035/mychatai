import { useContext, useState } from "react";
import MessageBox from "../components/MessageBox";
import "./chatpage.css";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";

export default function MainChat() {
    const { username, setUsername, headerOpt } = useContext(UserContext);
    const navigate = useNavigate()

    const [messages, setMessages] = useState([]);
    // const [messageArray, setMessageArray] = useState({ text: "", user_type: "user" });

    const sendMessage = (e) => {
        e.preventDefault();
        if (e.target[0].value.trim() !== "") {
            setMessages([...messages, { parts: [{ text: e.target[0].value }], role: "user" }]);
            document.querySelector(".chat_layout_body_chats").scrollBy({
                top: 1000000000000000,
                left: 100,
                behavior: "smooth",
            });
            fetch('http://localhost:3001/chat', {
                ...headerOpt,
                body: JSON.stringify({
                    newMessage: e.target[0].value,
                    messages
                })
            }
            ).then(res => res.json()
            ).then(data => {
                if (data) {
                    setMessages(data)
                }
            })
            e.target[0].value = '';
        }
    }

    const clearChat = () => {
        setMessages([]);
    }
    return <div className="chat_layout">
        <div className="chat_layout_header">
            <div className="layout_header_left">
                <span className="app_name">THA <em>AI</em></span>
                <span className="user_name">Hi {username}!</span>
            </div>
            <div className="layout_header_right">
                <div className="header_btn clear_btn" onClick={clearChat}>Clear</div>
                <div className="header_btn settings_btn" onClick={() => setUsername("")}>{username ? "Logout" : "Login"}</div>
                {/* <div className="header_btn more_btn">More</div> */}
            </div>
        </div>
        <div className="chat_layout_body">
            <div className="chat_layout_body_chats">
                {messages.map((message, index) =>
                    <MessageBox key={index} text={message.parts[0].text} role={message.role} />
                )}
                <div className={`scroller`}>
                </div>
            </div>
            {!username && <div className="goto-login-modal">
                <div className="modal-content">
                    <p>You need to be logged in to send a message.</p>
                    <div className="modal-action-btn">
                        {["Login", "Signup"].map((text, index) =>
                            <button key={index} onClick={() => navigate(`/${text}`)} dangerouslySetInnerHTML={{ __html: text }} />)}
                    </div>
                </div>
            </div>}
        </div>
        <div className="chat_layout_footer">
            <form className="layout_footer_form" onSubmit={sendMessage}>
                <textarea type="text" placeholder="Type a message" />
                <button>Send</button>
            </form>
        </div>
    </div>
}
