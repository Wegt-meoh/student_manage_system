import React, { useState } from 'react'
import { message } from 'antd'
import './index.css'

export default function Login() {

    const [ActicityState, setActicityState] = useState('login')

    function changeActivityState() {
        if (ActicityState === 'login') {
            setActicityState('register')
        } else {
            setActicityState('login')
        }
        message.success("activity state change",1)
    }

    return (
        <div>            
            <div className='App-login-board'>
                <div className='App-login-title' onClick={changeActivityState}>
                    {ActicityState === 'login' ? 'login' : 'register'}
                </div>
                <div className='App-login-content'>
                    <div className='App-login-input'>
                        <span>EMAIL</span>
                        <input type="text" placeholder='example@email.com' />
                    </div>
                    <div className='App-login-input'>
                        <span>PASSWORD</span>
                        <input type="text" placeholder='enter password here' />
                    </div>
                    {ActicityState==='login'?null:
                        <div className='App-login-input'>
                         <span>ENSUREPASSWORD</span>
                         <input type="text" placeholder='enter password again' />
                        </div>
                    }
                    <button className='App-login-button'>{ActicityState === 'login' ? 'login' : 'register'}</button>
                </div>
            </div>
        </div>
    )
}
