import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {
  const {SignInUser} = use(AuthContext)
const handleLogin = e =>{
    e.preventDefault();
   
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log( email, password);
    SignInUser(email, password)
    .then(result=>{
      console.log(result);
      
    })
    .catch(error=>{
      console.log(error);
      
    })
}
    return (
<div className='flex justify-center min-h-screen items-center'>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Login Your account!</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label  text-black font-semibold">Email</label>
          <input name='email' type="email" className="input" placeholder="Email Address" />
          <label className="label  text-black font-semibold">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className='text-sm'>Don't have any account ? <Link className='text-blue-600 underline' to={'/auth/register'}>Register</Link></p>
        </form>
      </div>
    </div>
    </div>
    );
};

export default Login;