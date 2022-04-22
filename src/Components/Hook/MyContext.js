import { createContext, useState } from "react";
import { data } from "../data";

const CountryContext = createContext();

const DataProvider = ({ children }) => {
  const [list, setList] = useState(data);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [url, setUrl] = useState("");

  let value = {
    list,
    setList,
    name,
    setName,
    code,
    setCode,
    url,
    setUrl,
  };

  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
};

export { DataProvider, CountryContext };
