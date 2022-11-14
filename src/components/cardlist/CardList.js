import "./cardlist.css"
import React, { useEffect, useState } from 'react'
import Card from "../card/Card";

const CardList = () => {

  const [data, setData] = useState()

  useEffect(() => {
    fetch("http://localhost:3000/stores")
  .then((response) => response.json())
  .then((data) => {
    setData(data)
    console.log(data.data)
  });

  }, []);
 
  return (
    <div className="list">
   
    </div>
  )
}

export default CardList