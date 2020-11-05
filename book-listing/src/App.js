import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

import SearchInput from "./SearchInput.js";
import BookList from "./BookList.js";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [input, setInput] = useState('')

  const getSearchResults = (input) => {
    return fetch(`https://goodreads-server-express--dotdash.repl.co/search/${input}`, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }).then(response => response.json())
    .then(data => setSearchResults(data.list))

  };

  useEffect(() => {
    if (input && input.length) {
      getSearchResults(input)
    }
  }, [input])

  return (
    <div className="App">
      <SearchInput
        handleSearch={(input) => setInput(input)}
      />
      <BookList
        bookList={searchResults}
      />
    </div>
  );
}

export default App;
