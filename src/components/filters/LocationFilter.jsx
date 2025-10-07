import { useState } from "react";

const LocationFilter = ({ locations, selectedLocations, onChange }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="text-sm">
      <button
        className=" bg-gray-200 py-3 text-sm px-2 rounded-md cursor-pointer"
        onClick={() => setToggle(!toggle)} > select Location
      </button>
      {toggle && <div className="absolute p-4 shadow-lg bg-gray-500 rounded-md text-white">
        {locations.map((loc) => (
            <div className=" ">
              <label key={loc} className="">
                <input
                  type="checkbox"
                  value={loc}
                  checked={selectedLocations.includes(loc)}
                  onChange={() => onChange(loc)}
                  className="mr-1 mb-2"
                />
                {loc}
              </label>{" "}
            </div>
          ))}
      </div>

      }
      
    </div>
  );
};

export default LocationFilter;
