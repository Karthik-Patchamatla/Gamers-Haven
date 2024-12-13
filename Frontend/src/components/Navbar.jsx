import React, { useState } from 'react';
import Menu from '../assets/menu.svg';
import Close from '../assets/xmark.svg';
import logo from '../assets/logo.png';
import cart from '../assets/cart.svg';
import user from '../assets/user.svg';
import search from '../assets/search.svg';

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-32 md:h-[68px] w-full bg-[#212121] flex flex-col justify-center items-center">
      <div className="h-14 w-full flex justify-between items-center px-5 lg:px-40">
        {/* Hamburger Menu */}
        <div className='md:hidden'>
          <img
            className="cursor-pointer"
            src={isSidebarOpen ? Close : Menu}
            alt="Menu"
            onClick={toggleSidebar}
          />
        </div>

        {/* Logo */}
        <div className="h-14 flex justify-center items-center md:order-first">
          <img src={logo} alt="logo" className="h-10" />
        </div>

        {/* menu */}
        <div className='text-white text-[14.5px] space-x-8 hidden md:flex'>
          <a href="" className='hover:text-[#aa3466]'>Games</a>
          <a href="" className='hover:text-[#aa3466]'>Consoles</a>
          <a href="" className='hover:text-[#aa3466]'>Accessories</a>
          <a href="" className='hover:text-[#aa3466]'>PC Components</a>
        </div>

        {/* Icons */}
        <div className="flex gap-4 items-center">
          <img src={search} className="hidden sm:flex w-6 h-6 cursor-pointer" alt="Search Icon" />
          <img src={cart} className="w-6 h-6 cursor-pointer" alt="Cart" />
          <img src={user} className="w-6 h-6 cursor-pointer" alt="User" />
        </div>
      </div>

      {/* Search Bar (Mobile Only) */}
      <div className="w-full flex items-center mt-2 px-5 md:hidden">
        <div className="relative flex-grow">
          <input
            type="text"
            className="w-full h-8 rounded-2xl bg-[#191919] text-white text-sm pl-4 pr-10 placeholder-gray-500"
            placeholder="Search Gamer's Haven"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <img src={search} className="w-6 h-6" alt="Search Icon" />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed w-[80%] inset-0 bg-[#191919] flex flex-col p-5 py-7 md:hidden z-50">
          <div className="w-full mb-20">
            <img
              src={Close}
              alt="Close Menu"
              className="w-8 h-8 cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
          <ul className="text-[#b0b0b0] text-lg divide-y divide-gray-700">
            <li className="py-4 hover:text-gray-300 transition">
              <a href="#" className="text-center w-full">Games</a>
            </li>
            <li className="py-4 hover:text-gray-300 transition">
              <a href="#" className="text-center w-full">Consoles</a>
            </li>
            <li className="py-4 hover:text-gray-300 transition">
              <a href="#" className="text-center w-full">Accessories</a>
            </li>
            <li className="py-4 hover:text-gray-300 transition">
              <a href="#" className="text-center w-full">PC Components</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
