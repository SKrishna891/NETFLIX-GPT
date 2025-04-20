import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, User_Avatar } from "../utils/constants";



const Header = ()=>{

  const user = useSelector(store=>store.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
     },[])
    return(
      <div className="absolute mx-6 px-8 py-2 bg-gradient-to-b from-black z-8 w-screen flex justify-between">
        <img className="w-44 " src={LOGO}
         alt="logo" />
       { user && <div className="flex p-2">
          <img  className="w-12 h-12 " src={user.photoURL || User_Avatar}
          alt="icon"/>
          <button className="cursor-pointer p-2 text-white" onClick={handleClick}>(Sign Out)</button>
         </div>}
      </div> 
    )
};

export default Header;