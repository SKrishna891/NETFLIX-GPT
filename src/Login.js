import { useState } from "react";
import Header from "./Header";

const Login = ()=>{

const [SignInform, setSignInform] = useState(true);

    const handelSignInform = ()=>{
      setSignInform(!SignInform);
    }
    return(
        <div>
<Header/>
<div className="absolute">
<img src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/US-en-20250407-TRIFECTA-perspective_e53d441f-ea54-4b60-a40e-dd76be0df041_large.jpg"
 alt="logo" />
        </div>
        
        <form className="absolute p-12 bg-black/80 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-md ">
        <h1 className="font-bold text-3xl p-2 m-2 text-white">{SignInform? "Sign In":"Sign Up"}</h1>
        {!SignInform && <input type="text" placeholder="Full Name"  className=" text-lg w-full p-2 my-3 rounded bg-gray-600 text-black placeholder-white"/>}
            <input type="text" placeholder="Email Address"  className=" text-lg w-full p-2 my-3 rounded bg-gray-600 text-black placeholder-white"/>
            <input type="password" placeholder="Password"  className="text-lg bg-gray-600  placeholder-white p-2 my-3 w-full"/>
            <button className="w-full py-2 my-6 bg-red-700 text-white rounded-lg cursor-pointer hover:bg-red-800">{SignInform? "Sign In":"Sign Up"}</button>
            <p className="py-4 text-center text-sm cursor-pointer" onClick={handelSignInform}>{SignInform?"New to Netflix? SignUp now..":"Already a member login now.."}</p>
        </form>
        </div>
    )
};

export default Login;