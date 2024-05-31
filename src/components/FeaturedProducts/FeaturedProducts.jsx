import React from 'react';
import Card from '../Card/Card';

function FeaturedProducts({ type }) {
  const data = [
    {
      id: 1,
      img1: "https://images.pexels.com/photos/1194760/pexels-photo-1194760.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Iphone",
      isNew: true,
      oldPrice: 19,
      salePrice: 14,
    },
    {
      id: 2,
      img1: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Laptop",
      isNew: true,
      oldPrice: 19,
      salePrice: 14,
    },
    {
      id: 3,
      img1: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "PC",
      oldPrice: 19,
      salePrice: 14,
    },
    {
      id: 4,
      img1: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Mac",
      isNew: true,
      oldPrice: 19,
      salePrice: 14,
    },
  ];

  return (
    <div className='flex flex-col items-center w-full py-20'>
      <div className='w-full flex items-center mb-12 px-6 md:px-12 lg:px-24'>
        <h1 className='w-2/5 text-center text-2xl font-bold capitalize'>{type} Products</h1>
        <p className='w-3/5 mt-4 text-base text-gray-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dicta molestiae dolor omnis, sunt eos ipsum impedit distinctio facilis quam ratione consectetur nesciunt voluptate voluptas mollitia. Velit nihil qui saepe.
        </p>
      </div>
      <div className='flex flex-wrap justify-center gap-6'>
        {data.map(item => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
