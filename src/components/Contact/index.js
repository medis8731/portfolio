import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'


export const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  
  const form = useRef();
  
  useEffect(() => {
    setTimeout(() => {
        return setLetterClass('text-animate-hover')
    },3000)
  });
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ftyuuhn', 'template_z4j4psl', form.current, {
        publicKey: 'fzGJBYUh9Nn1-ABQ4',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Message failed to send!');
        },
      );
  };
  return (
    <>
    <div className="container contact-page">
        <div className="text-zone">
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','m', 'e']} idx={15} />
            </h1>
            <p>
                if you want to contact me, you can reach me using the contact form below!
            </p>
            <div className='contact-from'>
                <form ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type='text' name="name" placeholder='Name' required/>
                        </li>
                        <li className='half'>
                            <input type='email' name="email" placeholder='Email' required/>
                        </li>
                        <li>
                            <input placeholder="Subject" type="text" name="subject" required/>
                        </li>
                        <li>
                            <textarea name="message" placeholder="Message" required></textarea>
                        </li>
                        <li> 
                            <input type="submit" className="flat-button" value="Send"/>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </div>
    <Loader type="pacman"/>
    </>
    )
};


export default Contact;