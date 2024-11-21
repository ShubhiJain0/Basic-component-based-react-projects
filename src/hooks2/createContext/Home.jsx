import React from 'react'
import { useContext } from 'react'
import { BioContext } from '.'
const Home = () => {
  const name = useContext(BioContext);
  return (
    <div>{name}</div>
  )
}

export default Home