import { useRef, useState } from "react";
import Header from "./Header";

import ValidateSigninData from "../utils/validate";

import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";

import {auth} from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { User_Avatar } from "../utils/constants";

const Login = ()=>{

const [SignInform, setSignInform] = useState(true);
const[errmessage,seterrmessage] = useState();



const dispatch = useDispatch();

const name = useRef(null);
const email = useRef(null);
const password = useRef(null);

    const handelSignInform = ()=>{
      setSignInform(!SignInform);
    }

    const handleButtonClick = () =>{
          
        
      const message =  ValidateSigninData(email.current.value,password.current.value);
      
      seterrmessage(message);

      if(message) return;
      if(!SignInform){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then(async (userCredential) => {
    const user = userCredential.user;

    try {
      await updateProfile(user, {
        displayName: name.current.value,
        photoURL: User_Avatar,
      });

      // Ensure latest data is loaded
      await auth.currentUser.reload();

      const { uid, email, displayName, photoURL } = auth.currentUser;
      dispatch(addUser({ uid, email, displayName, photoURL }));
    } catch (error) {
      seterrmessage(error.message);
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrmessage(`${errorCode} - ${errorMessage}`);
  }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        seterrmessage(errorCode +"-" +errorMessage);
        });
      }
      else{
      
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrmessage(errorCode +"-" +errorMessage);
          });
      }
        
    }
    return(
        <div>
<Header/>
<div className="absolute">
<img src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/US-en-20250407-TRIFECTA-perspective_e53d441f-ea54-4b60-a40e-dd76be0df041_large.jpg"
 alt="logo" />
        </div>
        
        <form onSubmit= {(e)=>e.preventDefault()} className="absolute p-12 bg-black/80 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-md ">
        <h1 className="font-bold text-3xl p-2 m-2 text-white">{SignInform? "Sign In":"Sign Up"}</h1>
        {!SignInform && <input 
        ref={name}
        type="text" placeholder="Full Name"  className=" text-lg w-full p-2 my-3 rounded bg-gray-600 text-black placeholder-white"/>}
            <input
            ref={email}
            type="text" placeholder="Email Address" 
             className=" text-lg w-full p-2 my-3 rounded bg-gray-600 text-black placeholder-white"/>
            <input 
            ref={password}
            type="password" placeholder="Password"  
            className="text-lg bg-gray-600  placeholder-white p-2 my-3 w-full"/>
            <p className="text-lg text-red-500 py-2">{errmessage}</p>
            <button className="w-full py-2 my-6 bg-red-700 text-white rounded-lg cursor-pointer hover:bg-red-800" onClick={handleButtonClick}>{SignInform? "Sign In":"Sign Up"}</button>
            <p className="py-4 text-center text-sm cursor-pointer" onClick={handelSignInform}>{SignInform?"New to Netflix? SignUp now..":"Already a member login now.."}</p>
        </form>
        </div>
    )
};

export default Login;