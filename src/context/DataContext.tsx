import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext(null);

export default function DataProvider({ children }){

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/v1/api/data");
        const result = await response.json();
        setData(result);
      }finally{
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <DataContext.Provider value={{ data }} >
        {children}
      </DataContext.Provider>
    </>
  )
};

export const useData = () => {
  const result = useContext(DataContext);
  return result;
}
