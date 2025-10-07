import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError]=useState(null)

 useEffect(() => {
    const API_URL="https://my-json-server.typicode.com/priyankauppada/companies-json-server/companies"
    const fetchData=async()=>{
        try{
            setLoading(true)
            let response=await axios.get(API_URL)
            console.log(response)
            setData(response.data)
        }catch(err){
            console.log(err)
            setError(err.message)
        }finally{
            setLoading(false);
        }
    }
    fetchData()
     
  }, []);

  return { data, loading, error };
};

export default useFetch;
