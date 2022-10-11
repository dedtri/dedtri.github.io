import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact'>
      
      <h5>get in touch</h5>
      <h2>contact me</h2>

      <div className="container contact__container">
        <div className="contact__mail">
          <article className='mail'>
<AiOutlineMail className='mail__icon'/>
<h4>Email</h4>
<h5>jaackie@live.dk</h5>
<a href="mailto:jaackie@live.dk" target="_blank">Send an email</a>
          </article>
        </div>

        <form action="" className='contact__form'>
        <input type="text" name='name' placeholder='Name' required className='form__name'/>
        <input type="email" name='email' placeholder='Email' required className='form__name'/>
        <input type="text" name='subject' placeholder='Subject' required />
        <textarea name='message' rows="7" placeholder='Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message!</button>
        </form>



      </div>

    </section>
  )
}

export default Contact