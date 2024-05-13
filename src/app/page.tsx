import Image from "next/image";
import Sidenav from "@/Components/Sidenav"



export default function Home() {
  return (
    <div className="flex grid md:grid-cols-4 lg:grid-cols-4">
      <div className="bg-blue-300 grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
      <Sidenav/>
      </div>
      <div className="bg-orange-300 sm:col-span-3 md:col-span-3 lg:col-span-3">
      <h1 className="text-[10rem]">Hello</h1>
      <h1 className="text-[10rem]">Hello</h1>
      <h1 className="text-[10rem]">Hello</h1>
      <h1 className="text-[10rem]">Hello</h1>
      <h1 className="text-[10rem]">Hello</h1>
      <h1 className="text-[10rem]">Hello</h1>
      <h1 className="text-[10rem]">Hello</h1>
      <h1 className="text-[10rem]">Hello</h1>
      <h1 className="text-[10rem]">Hello</h1>
      <h1>Hello</h1>
      </div>
      
    </div>
  );
}
