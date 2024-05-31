import React, { useState } from 'react';
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

function Slider() {
    const data = [
        "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrev = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='relative slider-container'>
            <IoIosArrowDropleft className="absolute top-3/4 left-10 transform -translate-y-1/2 text-8xl text-black z-10 cursor-pointer hover:scale-105 duration-200 hover:text-blue-500" onClick={handlePrev}>Previous</IoIosArrowDropleft>
            <img src={data[currentImageIndex]} alt="slider" className="absolute inset-0 w-full h-full object-cover" />
            <IoIosArrowDropright className="absolute top-3/4 right-10 transform -translate-y-1/2 text-8xl text-black cursor-pointer hover:scale-105 duration-200 hover:text-blue-500" onClick={handleNext}>Next</IoIosArrowDropright>
        </div>
    );
}

export default Slider;
