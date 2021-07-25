import { useState } from 'react'
import '../../styles/HomeCompStyles/Contact.css'


const Contact = () => {
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const submitForm = () => {
        window.open(
            `mailto:${'123islammahin@gmail.com'}?subject=${encodeURIComponent(
                subject
            )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
                email
            )}): ${encodeURIComponent(message)}`
        );
    };
    return (<>
        <div className='contact'>
            <h1>Contact us</h1>

            <div className="contact__form">

                <div className="contact__input wide">

                    <label>Name</label>
                    <input type="text" required value={name} onChange={(e) => { setName(e.target.value) }} />

                </div>


                <div className="contact__input email">

                    <label>Subject</label>
                    <input type="text" required value={subject} onChange={(e) => { setSubject(e.target.value) }} />

                </div>

                <div className="contact__input">

                    <label>Email</label>
                    <input type="text" required value={email} onChange={(e) => { setEmail(e.target.value) }} />

                </div>


                <div className="contact__input wide">

                    <label>Message</label>
                    <textarea required value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea>

                </div>


                <div className="contact__submitBtn">
                    <button onClick={submitForm}>Send</button>
                </div>

            </div>


        </div>

    </>
    )
}

export default Contact
