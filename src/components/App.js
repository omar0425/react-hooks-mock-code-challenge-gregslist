import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  function handleSearch(newSearch){
    setSearch(newSearch)
  }
  const [search, setSearch] = useState("")
  return (
    <div className="app">
      <Header onSearch={handleSearch}/>
      <ListingsContainer search= {search} />
    </div>
  );
}

export default App;
