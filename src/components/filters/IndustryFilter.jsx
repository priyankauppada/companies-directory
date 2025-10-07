import { useState } from "react";

const IndustryFilter = ({ industries, selectedIndustries, onChange }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button
        className=" bg-gray-200 py-3 cursor-pointer rounded-md text-sm px-2"
        onClick={() => setToggle(!toggle)}> select Industry
      </button>
      {toggle && (
         <div className="absolute p-4 shadow-lg bg-gray-500 rounded-md text-white">
        {industries.map((ind) => (
            <div>
              <label key={ind} className="mr-4 text-sm">
                <input
                  type="checkbox"
                  value={ind}
                  checked={selectedIndustries.includes(ind)}
                  onChange={() => onChange(ind)}
                  className="mr-1 mb-2"
                />
                {ind}
              </label>
            </div>
          ))}
      </div>

      )

      }
     
    </div>
  );
};

export default IndustryFilter;
