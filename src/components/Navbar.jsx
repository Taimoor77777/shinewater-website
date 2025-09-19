import { useState } from "react"
import { Menu, X } from "lucide-react"; 
export default function Navbar(){


    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <nav className = "flex justify-between items-center px-5 md:px-10 py-4  bg-white  relative">
            <div className="w-1/3 flex items-center  ">
           
                <div className="hidden xl:flex text-gray-700 gap-5 2xl:gap-8 justify-start text-[17px] 2xl:text-[19px] font-[600]">
                    <a href="#" className="hover:text-red-500 ">Home</a>
                    <a href="#" className="hover:text-red-500 " >Products</a>
                    <a href="#" className="hover:text-red-500 ">Recipes</a>
                    <a href="#" className="hover:text-red-500 ">About Us</a>
                    <a href="#" className="hover:text-red-500 ">Contact</a>
                </div>
                
                <button 
                    className="xl:hidden focus:outline-none" 
                    onClick={() => setMenuOpen(true)}
                >
                    <Menu className="w-6 h-6" />
                </button>

            

            </div>

             <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setMenuOpen(false)} className="focus:outline-none focus:ring-2 focus:ring-red-500">
            <X className="w-7 h-7" />
          </button>
        </div>

        
        <div className="flex flex-col p-4 space-y-4  text-gray-700">
          <a href="#" className="hover:text-red-500">Home</a>
          <a href="#" className="hover:text-red-500">Products</a>
          <a href="#" className="hover:text-red-500">Recipes</a>
          <a href="#" className="hover:text-red-500">About Us</a>
          <a href="#" className="hover:text-red-500">Contact</a>
        </div>
      </div>

      
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

            <div className=" flex w-1/3 justify-center">
                <img src="ShineWater logo_K 1.png" alt="Logo" className="h-14 md:h-28 object-contain transition-all ease-in-out duration-500 " />
            </div>

            <div className="flex gap-1 md:gap-3 w-1/3 justify-end ">
                <img src="Search.png" alt="Search" className="w-[35px] md:w-[55px] object-cover transition-all ease-in-out duration-500" />
                <img src="Link.png" alt="Contact" className="w-[35px] md:w-[55px] object-cover transition-all ease-in-out duration-500" />
                <img src="Button.png" alt="Button" className="w-[35px] md:w-[55px] object-cover transition-all ease-in-out duration-500" />
            </div>

           
        </nav>

    )
}