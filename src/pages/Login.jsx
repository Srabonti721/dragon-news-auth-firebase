import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {
  const [error, setError] = useState("")
  const { SignInUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  console.log(location);

  const handleLogin = e => {

    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    SignInUser(email, password)
      .then(result => {
        console.log(result);
        navigate(`${location.state ? location.state : "/"}`)

      })
      .catch(error => {
        console.log(error);
        setError(error.code)

      })
  }
  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold">Login Your account!</h1>
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label  text-black font-semibold">Email</label>
            <input name='email' type="email" className="input" placeholder="Email Address" required />
            <label className="label  text-black font-semibold">Password</label>
            <input name='password' type="password" className="input" placeholder="Password" required />
            {error && <p className='text-red-500'>{error}</p>}
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