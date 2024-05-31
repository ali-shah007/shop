import React from 'react';
import { Link } from 'react-router-dom';

function Card({ item }) {
  return (
    <Link to={`/product/${item.id}`}>
      <div className='flex flex-col w-[280px] gap-3'>
        <div className='overflow-hidden w-full h-[400px] relative'>
          {item.isNew && (
            <span className='absolute top-[50px] left-[5px] bg-white px-2 py-1 z-30 font-medium text-xs text-teal-500'>
              New Season
            </span>
          )}
          <img
            className='w-full h-full object-cover absolute z-10 transition-opacity duration-200'
            src={item.img1}
            alt='mainimg'
          />
          <img
            className='w-full h-full object-cover absolute z-20 opacity-0 transition-opacity duration-200 hover:opacity-100'
            src={item.img2}
            alt='secondimg'
          />
        </div>
        <h2 className=' text-base font-normal'>{item.title}</h2>
        <div className='flex gap-[20px] text-lg font-medium'>
          <h3 className='line-through text-gray-500'>${item.oldPrice}</h3>
          <h3 >${item.salePrice}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
