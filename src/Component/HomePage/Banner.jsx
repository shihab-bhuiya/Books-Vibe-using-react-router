import React from 'react';
import image from '../.././assets/hero_img.jpg'

const Banner = () => {
    return (
        

            <div className="hero bg-base-200 min-h-screen container mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      
      <h1 className="py-6 font-extrabold text-6xl">
       Books to freshen up your bookshelf
      </h1>
      <button className="btn btn-success">View The List</button>
    </div>
  </div>
</div>
       
    );
};

export default Banner;