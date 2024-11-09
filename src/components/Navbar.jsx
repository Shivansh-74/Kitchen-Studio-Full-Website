import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Button from '../Reuable.jsx/Button';

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="w-full flex justify-between h-[60px] items-center px-6 bg-gradient-to-t from-white to-gray-100 text-gray-800 shadow-md">
            <div className="logo font-bold text-2xl">
                SHIV
                <span className="text-orange-500">ANSH</span>
            </div>
            
            {/* Desktop Links */}
            <div className="md:flex hidden gap-8 text-lg items-center">
                <NavLink to="/" className="hover:text-orange-700 duration-200">Home</NavLink>
                <NavLink to="/about" className="hover:text-orange-700 duration-200">About</NavLink>
                <NavLink to="/gallery" className="hover:text-orange-700 duration-200">Gallery</NavLink>
                <NavLink to="/contact" className="hover:text-orange-700 duration-200">Contact</NavLink>
                <Button text="Login" />
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden text-2xl cursor-pointer" onClick={() => setToggle(!toggle)}>
                {!toggle ? <AiOutlineMenu /> : <AiOutlineClose />}
            </div>

            {/* Mobile Dropdown Menu */}
            {toggle && (
                <div className="absolute top-[60px] left-0 w-full bg-gray-100 text-gray-800 flex flex-col items-center shadow-lg">
                    <NavLink onClick={() => setToggle(false)} to="/" className="py-2 text-xl hover:text-orange-700 duration-200">Home</NavLink>
                    <NavLink onClick={() => setToggle(false)} to="/about" className="py-2 text-xl hover:text-orange-700 duration-200">About</NavLink>
                    <NavLink onClick={() => setToggle(false)} to="/gallery" className="py-2 text-xl hover:text-orange-700 duration-200">Gallery</NavLink>
                    <NavLink onClick={() => setToggle(false)} to="/contact" className="py-2 text-xl hover:text-orange-700 duration-200">Contact</NavLink>
                    <Button text="Login" className="mt-4 md:my-1 my-5" />
                </div>
            )}
        </div>
    );
}
