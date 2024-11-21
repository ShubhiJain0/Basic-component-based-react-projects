import React, { useEffect, useState } from 'react'

const UseFetchData = ({url}) => {
  const [data,setData]= useState([]);
  async function fetchData(){
    const response = await fetch(url);
    const result = await response.json();
    // setData(result);
    console.log(result);
    setData(result.products);
  }
  
  useEffect(()=>{
    fetchData();
  }, [])
  return {data};
}

export default UseFetchData