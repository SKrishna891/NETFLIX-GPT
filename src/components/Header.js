import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, Supported_Lang, User_Avatar } from "../utils/constants";
import { tooglegptSearch } from "../utils/gptslice";
import { SelectLangKey } from "../utils/LanguageSlice";



const Header = ()=>{

  const user = useSelector(store=>store.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gptSearch = useSelector(store=>store.Gpt.gptSearch);

   const handleClick = ()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      
    });
   }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
         
           const {uid,email,displayName,photoURL} = user;
           dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
           navigate("/browse");
         } else {
           dispatch(removeUser());
           navigate("/");
         }
       });
       return () => unsubscribe();
     },[]);
     
     const handlegptSearch = ()=>{
      dispatch(tooglegptSearch());
     };

     const handleLanguageChange = (e)=>{
      dispatch(SelectLangKey(e.target.value));
     }
    return(
      <div className="absolute mx-6 px-8 py-2 bg-gradient-to-b from-black z-8 w-screen flex justify-between ">
        <img className="w-44 " src={LOGO}
         alt="logo" />
       { user && <div className="flex justify-center p-2">
        {gptSearch && <select className="bg-gray-500 px-2 py-2 m-4" onChange={handleLanguageChange}>
          {Supported_Lang.map((lang)=><option key={lang.identifier} value={lang.identifier} >{lang.name}</option>)}
          
        </select>}
        <button className="px-4 py-2 m-4 bg-violet-500 rounded-lg text-white cursor-pointer" onClick={handlegptSearch}>{gptSearch?"HomePage":"GptSearch"}</button>
          <img  className="w-12 h-12 " src={user.photoURL || User_Avatar}
          alt="icon"/>
          <button className="cursor-pointer p-2 text-white" onClick={handleClick}>(Sign Out)</button>
         </div>}
      </div> 
    )
};

export default Header;