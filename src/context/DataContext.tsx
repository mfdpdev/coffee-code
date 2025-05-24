import { createContext, useContext, useEffect, useState, PropsWithChildren } from "react";
import { dataType } from "../types/data";

const DataContext = createContext<dataType | null>(null);

export default function DataProvider({ children }: PropsWithChildren){

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

// export const useData = <T extends unknown>(): T => {
export const useData = (): dataType => {
  const result = useContext(DataContext);
  return result!;
}
