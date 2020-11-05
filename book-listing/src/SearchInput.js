import React, { useState, useEffect } from "react";

const SearchInput = (props) => {
  const {handleSearch} = props
  const [query, setQuery] = useState('');

  const handleInput = (event) => {
    setQuery(event.target.value)
    if (event.key === "Enter") {
      handleSearch(query)
    }
  }

  return (
    <div>
      <input type="text" id="search" name="term" placeholder="Search..." onKeyUp={(event) => handleInput(event)}/>
      <button type="submit" id="submit-button" onClick={() => handleSearch(query)}>
        Search
      </button>
      <div></div>
    </div>
  );
};

export default SearchInput
