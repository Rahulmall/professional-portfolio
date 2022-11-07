import {React, useState} from 'react'
import {images} from '../../constants/index'
import {AppWrap, MotionWrap} from '../../wrapper/index'
import {client} from '../../client'
import  './Footer.scss'
const Footer = () => {
  const [formData, setFormData]=useState({name:'', email:'', message:''})
  const [loading, setLoading]=useState(false)
  const [isFormSubmitted, setIsFormSubmitted]=useState(false)

  const {username, email, message}=formData

  const handleChangeInput=(e)=>{
    const{name, value}=e.target;

    setFormData({...formData, [name]:value})
  }

  const handleSubmit=()=>{
    setLoading(true)

    const contact={
      _type:'contact',
      name:username,
      email:email,
      message:message,
    }

    client.create(contact) .then(()=>{
      setLoading(false)
      setIsFormSubmitted(true)
    })
    .catch((error)=>console.log(error))
  }
  return (
   <>
   <h2 className="head-text">Take a coffee & chat with me</h2>

   <div className="app__footer-cards">
    <div className="app__footer-card">
    <img src={images.email} alt="email"/>
    <a href='mailto:rahulmall862@gmail.com' className='p-text'>rahulmall862@gmail.com</a>
    </div>
    <div className="app__footer-card">
      <img src={images.mobile} alt="phone"/>
      <a href="tel:+91 8802845799" className='p-text'>+91 8802845799</a>
    </div>
    </div>
    {!isFormSubmitted? (<div className="app__footer-form app__flex">
      <div className="app__flex">
        <input type='text' className="p-text" placeholder='Enter Your Name' name="username" value={username} onChange={handleChangeInput}/>
      </div>
      <div className="app__flex">
        <input type='email' className="p-text" placeholder='Enter Your Email' name="email" value={email} onChange={handleChangeInput}/>
      </div>
      <div>
        <textarea className='p-text' placeholder='Enter your message' name='message' value={message} onChange={handleChangeInput}/>
      </div>
      <button type="button" className='p-text' onClick={handleSubmit}>Send Your Message</button>
    </div>
  ): (<div>
    <h3 className="head-text">Thanks for getting in touch!</h3>
  </div>)}
   
   </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg')