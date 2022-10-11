import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {FaDiscord} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import {useState} from 'react';
import { useTransition } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q317hoi', 'template_htzppwp', form.current, '-B9gBTZeH3HNjK-CS')

    .then((result) => {
      setIsAlertVisible(true);
      setTimeout(() => {
       setIsAlertVisible(false);
   }, 3500);
   
  }, (error) => {
      console.log(error.text);
  });

    e.target.reset()
  };

  const [ isAlertVisible, setIsAlertVisible ] = React.useState(false);

  // const handleButtonClick = () => {
  //     setIsAlertVisible(true);

  //          setTimeout(() => {
  //           setIsAlertVisible(false);
  //       }, 3000);
  // }

  return (
    <section id='contact'>
      
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__mail">
          <article className='mail'>
<AiOutlineMail className='mail__icon'/>
<h4>Email</h4>
<h5>jaackie@live.dk</h5>
<a href="mailto:jaackie@live.dk" target="_blank">Send an email</a>
          </article>
          <article className='mail'>
<FaDiscord className='mail__icon'/>
<h4>Discord</h4>
<h5>Trie#0123</h5>
<a href="https://discordapp.com/users/145968715022729216" target="_blank">Let's connect</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className='contact__form'>
        <div>
        <input type="text" name='name' placeholder='Name' required className='form__name'/> 
        <input type="email" name='email' placeholder='Email' required className='form__name'/>
        </div>
        <input type="text" name='subject' placeholder='Subject' required/>
        <textarea name='message' rows="7" placeholder='Message' required></textarea>
        <button type='submit' className='' id='submit__button' onClick="">Send Message!</button>
        </form>

   {isAlertVisible &&  
  <div className='mailsent__box'>Your email has been sent!</div> 
                } 

      
      </div>    

    </section>
  )
}

export default Contact