import './contact.css';
import Lottie from 'lottie-react';
import doneAnimation from '../../animation/done.json';
// import mailAnimation from '../../animation/mail.json';

import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("mgejqkln");
    return (
        <section className='contact' id='contact'>
            <div>
                <h1 className='title'>
                    <span className='icon-envelope'></span>
                    Contact Me
                </h1>
                <p className='subtitle'>
                    Lit's work together
                </p>
            </div>

            <div style={{ justifyContent: "space-between" }} className='flex'>
                <form onSubmit={handleSubmit}>
                    <div className='flex' style={{ marginBottom: '30px' }}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" required />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className='flex'>
                        <label htmlFor="message">Your message:</label>
                        <textarea name="message" id="message" required />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>

                    <button type="submit" disabled={state.submitting} className='submit'>
                        {state.submitting ? "Submitting..." : "Send"}
                    </button>
                    {state.succeeded && <p className="flex" style={{ color: "green", marginTop: "15px" }}> <Lottie loop={false} style={{ height: "50px" }} animationData={doneAnimation} /> Your message has been successfully</p>}
                </form>
                
                <div>
                    <img className='contact-image' src="/images/mail.png" alt="" />
                    {/* <Lottie loop={false} style={{height: "28rem" }} animationData={mailAnimation} /> */}
                </div>
            </div>
        </section>
    )
}
export default Contact;