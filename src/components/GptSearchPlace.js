import { useSelector } from "react-redux";
import lang from "../utils/Langconstants";

const GptSearchPlace = ()=>{

  const LangChange = useSelector(store=>store.Language.langkey);
    return(
        <div className="pt-[10%] flex justify-center" >   
          <form className="p-2 m-6 bg-black w-1/2 grid grid-cols-12 ">
            <input type="text" placeholder={lang[LangChange].gptplaceholdersearch} className="px-4 m-4 text-white border border-white col-span-9" />
            <button className="text-white bg-red-500 rounded-lg p-2 m-4 col-span-3">{lang[LangChange].Search}</button>
          </form>
        </div>
        
    )
};

export default GptSearchPlace;