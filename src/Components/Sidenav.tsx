import { HomeIcon, ServerStackIcon} from "@heroicons/react/24/outline";
import Link from "../../node_modules/next/link";
import Image from "next/image";
import Footer from "./Footer";
function Sidenav(){
    return(
      <div>
   <div className="relative grid grid-cols-1">
  
         <div className=" fixed bg-orange-500  pt-24 pb-24">
          <Image className="w-[250px] h-[250px] rounded-full" src="/im11.jpeg" alt="profile-image" width={250} height={250}/>
       
      <HomeIcon className="w-[25px] h-[25px]"/>
        <Link className="text-[12px] md:text-[15px] sm:text-[12px] lg-text-[20]" href="">Home</Link>
       

        <div className="text-white white flex items-center space-x-2 px-[2rem] hover:bg-green-500 bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase">
        <HomeIcon className="w-[25px] h-[25px]"/>
        <Link className="text-[12px] md:text-[15px] sm:text-[12px] lg-text-[20]" href="">Project</Link>
        </div>
      
        <div className=" text-white white  flex items-center space-x-2 px-[2rem] hover:bg-green-500 bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase">
        <HomeIcon className="w-[25px] h-[25px]"/> 
        <Link className="text-[12px] md:text-[15px] sm:text-[12px] lg-text-[20]" href="">About</Link>
        </div>

        <div className=" text-white white  flex items-center space-x-2 px-[2rem] hover:bg-green-500 bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase">
        <HomeIcon className="w-[25px] h-[25px]"/>
        <Link className="text-[12px] md:text-[15px] sm:text-[12px] lg-text-[20]" href="">Contact</Link>
        </div>
        
        </div>
        </div>
<Footer/>
        </div>

    )
}


export default Sidenav;