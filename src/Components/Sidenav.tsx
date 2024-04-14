import Link from "../../node_modules/next/link";
import { HomeIcon } from '@heroicon/react';
function Sidenav(){
    return(
   <div className="relative grid grid-cols-1">
    <h1 className="text-[10rem]">Hello</h1>
         <div className="fixed bg-orange-500  ">
        <div className=" flex items-center space-x-2 px-[2rem] hover:bg-green-500 bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase">
       <HomeIcon/>
        <Link className="text-[12px] md:text-[15px] sm:text-[12px] lg-text-[20]" href="">Home</Link>
        </div>

        <div className="flex items-center space-x-2 px-[2rem] hover:bg-green-500 bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase">
       
        <Link className="text-[12px] md:text-[15px] sm:text-[12px] lg-text-[20]" href="">Project</Link>
        </div>

        <div className="flex items-center space-x-2 px-[2rem] hover:bg-green-500 bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase">
         
        <Link className="text-[12px] md:text-[15px] sm:text-[12px] lg-text-[20]" href="">About</Link>
        </div>

        <div className="flex items-center space-x-2 px-[2rem] hover:bg-green-500 bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase">
      
        <Link className="text-[12px] md:text-[15px] sm:text-[12px] lg-text-[20]" href="">Contact</Link>
        </div>
       
        </div>
   </div>
    )
}


export default Sidenav;