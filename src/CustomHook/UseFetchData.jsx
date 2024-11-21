import React, { useEffect, useState } from 'react'

const useFetchData = ({url}) => {
  const [data,setData]=useState({});
  async function fetchData(){
    const response = await fetch(url);
    const result = await response.json();
    setData(result);
  }
  useEffect(()=>{
    fetchData();
  }, [url])
  return {data};
}

export default useFetchData