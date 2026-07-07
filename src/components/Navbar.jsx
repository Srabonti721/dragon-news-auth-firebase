import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const {users, signOutUser, } = use(AuthContext);
  console.log(users);
  
  const handleLogOut = () =>{
    signOutUser()
    .then(()=>{
      alert("user Sign in successfully")
    })
    .catch(error=>{
      console.log(error);
    })
  }

  return (
    <div className="flex justify-between items-center">
      <div className="text-blue-600 ">{users && users.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img className="w-12 rounded-full" src={`${users ? users.photoURL :userIcon}`} alt="" />
        {
          users ? 
          <button onClick={handleLogOut} className="btn btn-primary px-10 ">LogOut</button> :
          <Link to={'/auth/login'} className="btn btn-primary px-10 ">Login</Link>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
