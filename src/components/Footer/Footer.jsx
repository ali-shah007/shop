import React from 'react';
import { Link } from 'react-router-dom';
import payment from '../../assets/img/payment.png';

function Footer() {
  return (
    <div style={{ margin: '100px 200px 20px' }}>
      <div className='flex flex-col w-full mx-auto px-200 pt-100 pb-20 text-gray-500'>
        <div className='flex justify-between items-center mb-8'>
          {/* Top */}
          <div className='flex w-1/2 gap-60'>
            {/* Left side */}
            <div className='flex flex-col justify-center text-left'>
              <Link to='/'><h1 className='text-lg font-medium text-[#555]'>Categories</h1></Link>
              <Link to='/'>Categories</Link>
              <Link to='/'>Categories</Link>
              <Link to='/'>Categories</Link>
              <Link to='/'>Categories</Link>
              <Link to='/'>Categories</Link>
            </div>
            <div className='flex flex-col justify-center items-center text-left'>
              <Link to='/'><h1 className='text-lg font-medium text-[#555]'>Links</h1></Link>
              <Link to='/'>Links</Link>
              <Link to='/'>Links</Link>
              <Link to='/'>Links</Link>
              <Link to='/'>Links</Link>
              <Link to='/'>Links</Link>
            </div>
          </div>
          <div className='flex w-1/2 gap-10'>
            {/* Right side */}
            <div className='flex flex-col text-center'>
              <Link to='/'><h1 className='text-lg font-medium text-[#555] text-left'>About</h1></Link>
              <p className="text-justify" style={{ lineHeight: '1.6' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam error nemo placeat facere porro? Amet facilis delectus minus quibusdam dicta odit porro autem quas, ut cum optio minima. Repudiandae accusamus totam reprehenderit expedita odit quaerat autem quia quas quam voluptatum!</p>
            </div>
            <div className='flex flex-col text-center'>
              <Link to='/'><h1 className='text-lg font-medium text-[#555] text-left'>Contact</h1></Link>
              <p className="text-justify" style={{ lineHeight: '1.6' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam error nemo placeat facere porro? Amet facilis delectus minus quibusdam dicta odit porro autem quas, ut cum optio minima. Repudiandae accusamus totam reprehenderit expedita odit quaerat autem quia quas quam voluptatum!</p>
            </div>
          </div>
        </div>
        
        <div className='flex justify-between items-center'>
          {/* Bottom */}
          <div className='flex items-center text-center'>
            {/* Bottom left */}
            <span className='mr-2 text-2xl text-[#2879fe] font-bold font-raleway'>Alistore</span>
            <span className='text-gray-500'>Copyright 2024 All Rights are Reserved</span>
          </div>
          <div>
            {/* Bottom right */}
            <img className=' h-[50px]' src={payment} alt='payment' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
