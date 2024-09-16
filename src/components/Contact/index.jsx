import './index.scss';
import  AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'





const Contact = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const refForm = useRef();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value }); 
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  
    return () => clearTimeout(timer)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();
 
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Shahar Ishay',
        from_email: form.email,
        to_email: 'shaharishay14@gmail.com',
        message: form.message,
        subject: form.subject,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
        alert('Thank you for your message! I will get back to you as soon as possible.');
        window.location.reload(false);
        setTimeout(() => {
          setForm({ name: '', email: '', subject: '', message: '' });
        }, [3000]);
      }).catch((error) => {
        console.log(error);
        alert('An error occurred while sending the email. Please try again later.');
      });
  }

  return (
    <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15} 
                    />  
                </h1>
                <br />
                <p>
                    I am interested in freelance opportunities - especially on ambitious
                    or large projects. However, if you have any other requests or
                    questions, don't hesitate to contact me using below form either.
                </p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name"
                                placeholder="Name" onChange={handleChange} required />
                            </li>
                            <li className="half">
                                <input type="email" name="email"
                                placeholder="Email" onChange={handleChange} required />
                            </li>
                            <li>
                                <input placeholder="Subject" 
                                type="text" name="subject" onChange={handleChange} required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" onChange={handleChange} required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>

                </div>
            </div>
            <div className="info-map">
                Shahar Ishay
                <br />
                Israel
                <br />
                <span>+972 50-951-9915</span>
                <span>shaharishay14@gmail.com</span>
            </div>
            <div className="map-wrap">
                <MapContainer center={[31.99338585064362, 34.830279194719]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[31.99338585064362, 34.830279194719]}>
                    <Popup>Shahar lives here, come over for a cup of coffee :)</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="pacman" />
    </>
  );
};

export default Contact;