import React from 'react';
import { Link } from 'react-router-dom';
import payment from '../../assets/img/payment.png';

function Footer() {
  return (
    
      <div className='flex flex-col w-[80vw] mx-auto  pt-100 text-gray-500'>
        <div className='flex justify-between items-center mb-8'>
          {/* Top */}
          <div className='flex lg:w-2/5 w-full'>
            {/* Left side */}
            <div className='flex flex-col w-1/2 justify-center text-center '>
              <span to='/'><h1 className='text-lg font-medium text-[#555]'>Categories</h1></span>
              <Link to='/' className=' hover:text-blue-500 hover:scale-105 duration-200'>Categories</Link>
              <Link to='/' className=' hover:text-blue-500 hover:scale-105 duration-200'>Categories</Link>
              <Link to='/' className=' hover:text-blue-500 hover:scale-105 duration-200'>Categories</Link>
              <Link to='/' className=' hover:text-blue-500 hover:scale-105 duration-200'>Categories</Link>
              <Link to='/' className=' hover:text-blue-500 hover:scale-105 duration-200'>Categories</Link>
            </div>
            <div className='flex flex-col w-1/2 justify-center item-center text-center'>
              <span to='/'><h1 className='text-lg font-medium text-[#555]'>Quick Links</h1></span>
              <Link to='/' className=' hover:text-blue-500 hover:scale-105 duration-200'>Links</Link>
              <Link to='/' className=' hover:text-blue-500 hover:scale-105 duration-200'>Links</Link>
              <Link to='/' className=' hover:text-blue-500 hover:scale-105 duration-200'>Links</Link>
              <Link to='/' className=' hover:text-blue-500 hover:scale-105 duration-200'>Links</Link>
              <Link to='/' className=' hover:text-blue-500 hover:scale-105 duration-200'>Links</Link>
            </div>
          </div>
          <div className='hidden lg:flex w-3/5 gap-20'>
            {/* Right side */}
            <div className='flex flex-col w-1/2 text-left'>
              <span className='text-lg font-medium text-[#555] text-left'>About</span>
              <p className="text-wrap" style={{ lineHeight: '1.6' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam error nemo placeat facere porro? Amet facilis delectus minus quibusdam dicta odit porro autem quas, ut cum optio minima. Repudiandae accusamus totam reprehenderit expedita odit quaerat autem quia quas quam voluptatum!</p>
            </div>
            <div className='flex flex-col w-1/2 text-left'>
              <span className='text-lg font-medium text-[#555] text-left'>Contact</span>
              <p className=" text-wrap" style={{ lineHeight: '1.6' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam error nemo placeat facere porro? Amet facilis delectus minus quibusdam dicta odit porro autem quas, ut cum optio minima. Repudiandae accusamus totam reprehenderit expedita odit quaerat autem quia quas quam voluptatum!</p>
            </div>
          </div>
        </div>
        
        <div className='flex flex-col lg:flex-row justify-between items-center'>
          {/* Bottom */}
          <div className='flex flex-col lg:flex-row items-center text-center'>
            {/* Bottom left */}
            <span className='mr-2 text-2xl text-[#2879fe] font-bold font-raleway'>Alistore</span>
            <span className='text-gray-500 '>Copyright 2024 All Rights are Reserved</span>
          </div>
          <div >
            {/* Bottom right */}
            <img className=' h-[50px]' src={payment} alt='payment' />
          </div>
        </div>
      </div>
    
  );
}

export default Footer;
