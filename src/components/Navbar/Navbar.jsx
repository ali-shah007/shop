import React from 'react';
import english from '../../assets/img/en.png'; 
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className=" hidden lg:flex justify-between items-center w-full py-3 text-gray-800 px-4 text-lg">
      <div className="flex items-center gap-5">
        {/* Start Section */}
        <div className='flex justify-center items-center'>
          <img src={english} alt="english language" />
          <MdKeyboardArrowDown/>
        </div>
        <div className='flex justify-center items-center'>
          <span>USD</span> 
          <MdKeyboardArrowDown/>
        </div>
        <div>
          <Link to='/products/1' className='hover:scale-105 duration-200 inline-block'>Men</Link>
        </div>
        <div>
          <Link to='/products/2' className='hover:scale-105 duration-200 inline-block'>Women</Link>
        </div>
        <div>
          <Link to='/products/3' className='hover:scale-105 duration-200 inline-block'>Children</Link>
        </div>
        <div>
          <Link to='/products/4' className='hover:scale-105 duration-200 inline-block'>Accessories</Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
        {/* Middle Section */}
        <div className='text-[30px] font-raleway rounded-full text-blue-500 font-bold'>
          <Link to='/'>AliStore</Link>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
        {/* End Section */}
        <div>
          <Link to='/' className='hover:scale-105 duration-200 inline-block'>Homepage</Link>
        </div>
        <div>
          <Link to='/' className='hover:scale-105 duration-200 inline-block'>About</Link>
        </div>
        <div>
          <Link to='/' className='hover:scale-105 duration-200 inline-block'>Contact</Link>
        </div>
        <div>
          <Link to='/' className='hover:scale-105 duration-200 inline-block'>Store</Link>
        </div>
        <div className='flex justify-center items-center gap-5'>
          <MdOutlineSearch className='w-7 h-7 cursor-pointer hover:scale-105 duration-200' />
          <CiUser className='w-7 h-7 cursor-pointer hover:scale-105 duration-200' />
          <CiHeart className='w-7 h-7 cursor-pointer hover:scale-105 duration-200' />
          <div className="flex relative cursor-pointer hover:scale-105 duration-200">
            <LuShoppingCart className='w-7 h-7 ' />
            <span className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center absolute top-0 right-0 -mt-1 -mr-3 text-sm">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
