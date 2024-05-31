import React, { useState } from 'react';

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
            <button className="absolute top-1/2 left-0 transform -translate-y-1/2 text-4xl text-blue-500 z-10" onClick={handlePrev}>Previous</button>
            <img src={data[currentImageIndex]} alt="slider" className="absolute inset-0 w-full h-full object-cover" />
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 text-4xl text-blue-500" onClick={handleNext}>Next</button>
        </div>
    );
}

export default Slider;
