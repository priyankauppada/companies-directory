
import React, { useState } from "react";

const ProductCard = ({ company }) => {
  const { id, name, logo, industry, location, description, rating, website, founded, employees } = company;
   const [show, setShow] = useState(false);
  return (
    <div className="text-xs shadow-lg hover:shadow-xl bg-white transition rounded-lg  p-4 flex flex-col sm:flex-row items-start md:items-center gap-4 my-4">
      <div className="flex items-center gap-4 w-full sm:w-1/4">
        <img className="h-20 w-20 object-contain" src={logo} alt={name} />
        <div>
          <h2 className="font-bold text-lg">{name}</h2>
          <p className="text-sm text-gray-600">{industry}</p>
          <h3 className="text-sm text-gray-500">{location}</h3>
        </div>
      </div>

      <div className="text-sm sm:w-1/6">
        <h2 className="font-semibold">Founded: {founded}</h2>
        <p>⭐ {rating}</p>
        <h3>{employees} Employees</h3>
      </div>
      <div className="sm:w-1/3 relative inline-block m-2 group">
      <p className="cursor-pointer  text-sm text-gray-700 line-clamp-2"  
       >{description}</p>
         <div className="absolute top-0 mt-1 w-68 md:w-96 bg-gray-200 p-4 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        {description}
      </div>
      </div>
      <div className="sm:w-1/5 flex justify-center items-center">
        <a
          href={website}
          target="_blank"
          rel="noreferrer"
          className="bg-[#029653] text-white px-4 py-2 rounded-md hover:bg-[#027845] transition"
        >
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
