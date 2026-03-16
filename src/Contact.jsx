import {useState} from 'react';
import './Contact.css';

function Contact () {
    const [messages, setMessages] = useState([]);
    const [form, setForm] = useState ({
        name:"",
        email: "",
        subject: "",
        message: "",
    });
    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }
    function handSubmit(e){
        e.preventDefault();
        const newMessage ={
            name: form.name,
            message: form.message,
            id: Date.now()
        };
        setMessages ([newMessage, ...messages]);
        setForm ({
            name:"",
            email: "",
            subject: "",
            message: ""
        });
        setTimeout(()=>{
            setMessage((prev) =>
                prev.filter((msg) => msg.id !== newMessage.id)
            );
        },10000);
    }
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <form onSubmit={handSubmit}>
                <label>Name</label>
                <input name="name" value={form.name} onChange={handleChange} />

                <label>Email</label>
                <input name="email" value = {form.email} onChange={handleChange} />

                <label>Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} />

                <label>Message</label>
                <textarea name="message" rows="5" value={form.message} onChange={handleChange} />

                <button type="submit">Send</button>
            </form>
        <h2>Recently Sent Messages (autodeletes)</h2>
        {messages.map((msg) => (
            <div key={msg.id} className = "message-card">
                <strong>User name: {msg.name}</strong>
                <p>User Message: {msg.message}</p>
            </div>
        ))}
        </div>
    );
}

export default Contact