import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthProvider';

const Register = () => {
  const { createUser, setUsers } = use(AuthContext)
  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then(result => {
        const user = result.user
        setUsers(user)
      })
      .catch(error => {
        console.log(error);

      })

  }
  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl font-bold">Register Your account!</h1>
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label text-black font-semibold">Your Name</label>
            <input name='name' type="text" className="input" placeholder=" Your Name" />
            <label className="label  text-black font-semibold">Photo URL</label>
            <input name='photo' type="text" className="input" placeholder="Photo URL" />
            <label className="label  text-black font-semibold">Email</label>
            <input name='email' type="email" className="input" placeholder="Email Address" />
            <label className="label  text-black font-semibold">Password</label>
            <input name='password' type="password" className="input" placeholder="Password" />
            <div><a className="link link-hover">Forgot password?</a></div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className='text-sm'>Already have any account ? <Link className='text-blue-600 underline' to={'/auth/login'}>Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;