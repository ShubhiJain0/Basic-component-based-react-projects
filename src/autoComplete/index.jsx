import React, { useEffect, useState } from 'react'

const AutoComplete = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  
  async function fetchData() {
    const response = await fetch("https://dummyjson.com/users");
    const result = await response.json();
    
    setData(result.users);
    
    
  }
  
  useEffect(()=>{
    fetchData();
    console.log(data);
    
  }, [])
  return (
    <>
      <div>
        <label htmlFor="search">SearchBox</label>
        <input
          type="text"
          id="search"
          placeholder="search here"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      <div>
        {search !== "" &&
          data.map((singleData) =>
            singleData.firstName
              .toLowerCase()
              .includes(search.toLowerCase()) ? (
              <li>{singleData.firstName+" "+ singleData.lastName}</li>
            ) : singleData.lastName.toLowerCase().includes(search.toLowerCase())? (<li>{singleData.firstName+ " "+ singleData.lastName}</li>): null
          )}
      </div>
    </>
  );
}

export default AutoComplete;