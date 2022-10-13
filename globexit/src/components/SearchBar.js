import React, { useState } from "react";
import { getFilteredUsersData } from "../services/api";

function SearchBar({updateData}) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try{
      updateData(await getFilteredUsersData(searchValue));
    } catch(error){
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;

    setSearchValue(value);
  }

  return (
    <div className=''>
      <form action="" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={searchValue}
          disabled={isLoading}
          type="text"
        />
      </form>
    </div>
  )
};

export default SearchBar;