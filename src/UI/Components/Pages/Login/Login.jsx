import React from 'react'
import './Login.css';
import icon from '../../Images/Vector.png'
import log from '../../Images/Login-Tap.png'

function Login() {
  return (
    <div>
        <div className='main'>
        <img  id='image' src={log} alt=""/>
        <div className='left-side'>
            <p id='title'>Login</p>
            <form className='form'>
            <input type="username" id='name' placeholder='Username' required/>
            <input type="password" id='name' placeholder='Password' required/>
        </form>
        <div className='password-rest'>
            <div className='icon'>
                <img id='icon' src={icon} alt=""/>
                <p>rember me?</p>
            </div>
            <p>forget password?</p>

        </div>
        <div className='button'>
        <button id='button2'>Register</button> 
        <button id='button1'>Login</button>
        </div>
        
        </div>
        </div>
        <div className='footer-bottom'>
       <p id='foot'>Copyright @ E_water For All </p>
       <p id='foot'>Developer : <span>BE ltd</span></p>


     </div>

    </div>
  )
}

export default Login