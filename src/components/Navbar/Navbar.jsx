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
    <div className="flex justify-between items-center  w-full py-3 text-gray-800 px-4 text-lg">
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
            <Link to='/products/1'>Men</Link>
        </div>
        <div>
            <Link to='/products/2'>Women</Link>
        </div>
        <div>
            <Link to='/products/3'>Children</Link>
        </div>
        <div>
            <Link to='/products/4'>Accessories</Link>
        </div>
        
      </div>
      <div className="flex justify-center items-center">
        {/* Middle Section */}
        <div className='text-[30px] font-raleway'>
          <Link to='/'>AliStore</Link>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
        {/* End Section */}
        <div>
          <Link to='/'>Homepage</Link>
        </div>
        <div>
          <Link to='/'>About</Link>
        </div>
        <div>
          <Link to='/'>Contact</Link>
        </div>
        <div>
          <Link to='/'>Store</Link>
        </div>
        <div className='flex  justify-center items-center gap-5 icon-color cursor-pointer'>
          <MdOutlineSearch  className=' w-6 h-6' />
          <CiUser  className=' w-6 h-6' />
          <CiHeart  className=' w-6 h-6' />
          <div className="flex relative">
  <LuShoppingCart className=' w-6 h-6' />
  <span className="w-3 h-3 rounded-full bg-blue-500 text-white flex items-center justify-center absolute top-0 right-0 -mt-1 -mr-1 text-[12px]">0</span>
</div>

          
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;
