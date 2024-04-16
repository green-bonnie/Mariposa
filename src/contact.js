import { React, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Element } from 'react-scroll';
import './contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3uktoic', 'template_9vzxj0t', form.current, 'fXxk1jXd-R4zPIhfl')
        .then((result) => {
            console.log(result.text);
            console.log("message sent succesfully");
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
    
        <Element id='contact' name='contact'>
          <h1>Contact me!</h1>
          <h3>Fill out the form below to get in touch with me.</h3>
          <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Phone Number</label>
          <input type="text" name="user_phone" placeholder= "123 456 8790" />
          <label>Email</label>
          <input type="email" name="user_email" placeholder= "thisismyemail@example.com" />
          <label>Estimated Due Date</label>
          <input type="date" name="due_date" placeholder="MM/DD/YY"/>
          <label>Birth Location</label>
          <input type= "text" name="birth_location" />
          <label>Address</label>
          <input type="text" name="address" placeholder="123 Mariposa Dr, Weatherford" />
          <label>Are you interested in a birth doula, postpartum doula, or both?</label>
          <select name="service">
            <option value="" disabled>Choose an option</option>
            <option value="birth">Birth Doula</option>
            <option value="postpartum">Postpartum Doula</option>
            <option value="combo">Birth & Postpartum Doula Combo</option>
          </select>
          <label>How did you hear about us?</label>
          <select name="where">
            <option value="" disabled>Choose an option</option>
            <option value="website">Personal Website</option>
            <option value="google">Google</option>
            <option value="instagram">Instagram</option>
            <option value="facebook">Facebook</option>
            <option value="client">Client Referral</option>
            <option value="vendor">Vendor Referral</option>
            <option value="other">Other</option>
          </select>
          <label>Message</label>
          <textarea name="message"
                    placeholder="Enter any questions here"
                    rows="6" />
          <input type="submit" value="Send" />
        </form>
      </Element>
    )
}

export default Contact;