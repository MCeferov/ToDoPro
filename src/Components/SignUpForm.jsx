//! Hooks
import { useState, useRef } from "react";

//! Icons
import VisibleIcon from "../Icons/VisibleIcon";
import HiddenIcon from "../Icons/HiddenIcon";

//! React Router
import { Link, useHistory } from "react-router-dom";

//! SupaBase
import supabase from "../supabase"

const SignupForm = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const history = useHistory()

  const nameRef = useRef()
  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  const toggleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };

   const signUpHandler = async (e) => {
    e.preventDefault()
   if(
    !nameRef.current.value || 
    !usernameRef.current.value ||
    !emailRef.current.value ||
    !passwordRef.current.value ||
    !confirmPasswordRef.current.value ) 
    {
    return;
   }

   if( passwordRef.current.value !== confirmPasswordRef.current.value ) 
   {
    return;
   }

   const { data, error } = await supabase.auth.signUp({
    email: emailRef.current.value,
    password: passwordRef.current.value,
    options: {
      data:{
       username:usernameRef.current.value,
       fullname:nameRef.current.value,
      },
    },
   });

   if (error) {
    console.log(error);
   }
   if (data) {
console.log(data);
const newUser = {
  email:data.user.email,
  id:data.user.id,
  fullname:data.user.user_metadata.fullname,
  username:data.user.user_metadata.username,
}
props.getUser(newUser)
history.replace("/")
   }
   }

  return (
    <div className="bg-white text-black  rounded-lg p-10 pt-15 relative">
      <h1 className="text-2xl font-medium mb-2 text-center">
        Welcome to ToDoPro
      </h1>

      <p className="text-xs font-light mb-5 text-center">
        Please enter your details
      </p>

      <form onSubmit={signUpHandler}>
        <div className="w-full mb-5 border-b border-black">
          <input
          ref={nameRef}
            type="text"
            placeholder="Fullname"
            className="inline-block w-full placeholder:text-black p-3 pl-0 text-sm focus:outline-none"
          />
        </div>

        <div className="w-full mb-5 border-b border-black">
          <input
            ref={usernameRef}
            type="text"
            placeholder="Username"
            className="inline-block w-full placeholder:text-black p-3 pl-0 text-sm focus:outline-none"
          />
        </div>

        <div className="w-full mb-5 border-b border-black">
          <input
            ref={emailRef}
            type="text"
            placeholder="Email"
            className="inline-block w-full placeholder:text-black p-3 pl-0 text-sm focus:outline-none"
          />
        </div>

        <div className="w-full mb-5 flex items-center border-b border-black">
          <input
            ref={passwordRef}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="inline-block w-full placeholder:text-black p-3 pl-0 text-sm focus:outline-none"
          />
          <button onClick={toggleShowPassword} className="mr-2">
            {showPassword ? <HiddenIcon /> : <VisibleIcon />}
          </button>
        </div>

        <div className="w-full flex items-center border-b border-black">
          <input
            ref={confirmPasswordRef}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="inline-block w-full placeholder:text-black p-3 pl-0 text-sm focus:outline-none"
          />
          <button onClick={toggleShowConfirmPassword} className="mr-2">
            {showConfirmPassword ? <HiddenIcon /> : <VisibleIcon />}
          </button>
        </div>
      </form>

      <button onClick={signUpHandler} className="bg-dark text-white w-full py-2 rounded-full mt-4 border-black border-2 hover:bg-white hover:text-black transition-all duration-200">
        Sign Up
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px]">
        Already have an account? <Link to="/sign-in">Sign In</Link>
      </div>
    </div>
  );
};

export default SignupForm;
