import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthProvider";

const SocialLogin = () => {
  const { SignInGoogle, signInGithub, setUsers } = use(AuthContext)
  const handleGoogle = () => {
    SignInGoogle()
      .then(result => {
        // console.log(result.user);
        setUsers(result)
      })
      .then(error => {
        console.log(error.message);

      })
  }
  const handleGithub = () => {
    signInGithub()
      .then(result => {
        setUsers(result)
        // console.log(result.user);
      })
      .then(error => {
        console.log(error.message);

      })
  }
  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button onClick={handleGoogle} className="btn btn-secondary btn-outline w-full">
          <FcGoogle size={24} /> Login with Google
        </button>
        <button onClick={handleGithub} className="btn btn-outline btn-primary w-full">
          <FaGithub size={24} /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
