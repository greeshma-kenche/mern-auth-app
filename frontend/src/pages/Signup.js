import React from 'react'
import { Link } from 'react-router-dom'
import {ToastContainer} from 'react-toastify';

function signup() {
  return (
    <div className='container'>
        <h1>Sign Up</h1>
        <form>
            <div>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    autoFocus
                    placeholder='Please enter your name...'
                />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    name='email'
                    placeholder='Please enter your email...'
                />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    placeholder='Please enter your password...'
                />
            </div>
            <button>Signup</button>
            <span>Already have an account ?
                <Link to='/login'>Login</Link>
            </span>
        </form>
        <ToastContainer />
    </div>
  )
}

export default signup