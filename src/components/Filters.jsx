import React, { useEffect, useState } from "react";
import SearchInput from "./filters/SearchInput";
import SortFilter from "./filters/SortFilter";
import IndustryFilter from "./filters/IndustryFilter";
import LocationFilter from "./filters/LocationFilter";
import useFetch from "../hooks/useFetch";

const Filters = ({ onFilter }) => {
  const { data: companies } = useFetch();
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const uniqueLocations = [
    ...new Set(companies.map((c) => c.location.split(",")[0])),
  ];
  const uniqueIndustries = [...new Set(companies.map((c) => c.industry))];

  const applyFilters = () => {
    let temp = [...companies];

    if (selectedLocations.length) {
      temp = temp.filter((c) =>
        selectedLocations.includes(c.location.split(",")[0])
      );
    }

    if (selectedIndustries.length) {
      temp = temp.filter((c) =>
        selectedIndustries.some((i) => c.industry.includes(i))
      );
    }

    if (searchText) {
      temp = temp.filter((c) =>
        c.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (sortOption === "rating") temp.sort((a, b) => b.rating - a.rating);
    else if (sortOption === "founded")
      temp.sort((a, b) => b.founded - a.founded);

    onFilter(temp);
  };

  useEffect(() => {
    applyFilters();
  }, [
    selectedLocations,
    selectedIndustries,
    searchText,
    sortOption,
    companies,
  ]);

  const clearFilters = () => {
    setSelectedLocations([]);
    setSelectedIndustries([]);
    setSearchText("");
    setSortOption("");
  };

  return (
    <div className="p-4 my-5">
      {/* Top Row: Search + Mobile Filters Button */}
      <div className="flex gap-2 mb-4">
        <div className="flex-1">
          <SearchInput
            value={searchText}
            onChange={setSearchText}
            className="w-full "
          />
        </div>
        <div className="text-sm md:hidden">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="bg-green-700 text-white px-4 py-2 rounded"
          >
            {showMobileFilters ? "Hide" : "Filters"}
          </button>
        </div>
      </div>

      {/* Filters Section: visible on desktop or when mobile toggle is true */}
      <div
        className={`grid grid-cols-1 md:grid-cols-6 gap-2 items-center transition-all duration-300 ${
          showMobileFilters ? "block" : "hidden md:grid"
        }`}
      >
        <div className="md:col-span-1">
          <LocationFilter
            locations={uniqueLocations}
            selectedLocations={selectedLocations}
            onChange={(loc) =>
              setSelectedLocations((prev) =>
                prev.includes(loc)
                  ? prev.filter((l) => l !== loc)
                  : [...prev, loc]
              )
            }
          />
        </div>

        <div className="md:col-span-1">
          <IndustryFilter
            industries={uniqueIndustries}
            selectedIndustries={selectedIndustries}
            onChange={(ind) =>
              setSelectedIndustries((prev) =>
                prev.includes(ind)
                  ? prev.filter((i) => i !== ind)
                  : [...prev, ind]
              )
            }
          />
        </div>

        <div className="md:col-span-1">
          <SortFilter value={sortOption} onChange={setSortOption} />
        </div>

        <div className="md:col-span-1">
          <button
            onClick={clearFilters}
            className="bg-red-700 text-sm md:ml-5 text-white px-4 py-2 rounded w-full"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
