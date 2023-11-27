/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext();
const SearchProvider = ({ children }) => {
    const [searchTag, setSearchTag] = useState('')
    const [tag, setTag] = useState('')
    const getSearchValue = (value) =>{
        return setSearchTag(value)
    }
    console.log(searchTag);
    useEffect(() =>{
        setTag(searchTag)
    },[searchTag])
  const searchValue = {
    getSearchValue,
    tag
  };
  return (
    <SearchContext.Provider value={searchValue}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
