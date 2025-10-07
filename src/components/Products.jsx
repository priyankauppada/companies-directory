
import React, { useState} from "react";
import ProductCard from "./ProductCard";
import useFetch from "../hooks/useFetch";
import Filters from "./Filters";
 
const Products = () => {
  const { data: companies, loading, error } = useFetch();
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center text-red-600 mt-10">{error}</div>;

  return (
    <div className="bg-gray-100 pt-8 p-4 md:py-8 md:px-16">
        <h2 className="text-3xl font-semibold text-center"> 
            Companies <span className="font-bold text-[#029653] italic">Directory</span></h2>
       
        <Filters onFilter={setFilteredCompanies} />
        {(filteredCompanies.length ? filteredCompanies : companies).map((company)=>{
            return(
                <ProductCard key={company.id} company={company} />
            )
            
        })}
    </div>
  );
};

export default Products;
