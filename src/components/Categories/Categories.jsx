import React from 'react'

function Categories() {
  return (
    <div className='flex w-[98vw] mx-auto gap-1 h-[80vh] overflow-hidden'>
        <div className='flex w-1/2 gap-1' >
            <div className='flex w-1/2 flex-col gap-1 '>
                    <img className=' w-full h-1/2 object-cover' src='https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='firstcategroy' />
                    
                    <img className=' w-full h-1/2 object-cover'src='https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='firstcategroy' />
            </div>
            <div className='flex w-1/2 h-full'>
            <img className=' w-full h-full object-cover'src='https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='firstcategroy' />
            </div>

        </div>
        <div className='flex flex-col w-1/2 gap-1'>
            <div className='flex h-1/2 flex-row gap-1'>
            <img className=' w-full h-full object-cover'src='https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='firstcategroy' />
            <img className=' w-full h-full object-cover'src='https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='firstcategroy' />
            </div>
            <div className='flex w-full h-1/2 object-cover gap-1'>
            <img className=' w-full h-full object-cover'src='https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='firstcategroy' />
            </div>

        </div>
    </div>
  )
}

export default Categories