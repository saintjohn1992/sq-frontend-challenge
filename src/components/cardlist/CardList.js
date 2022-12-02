import "./cardlist.css"
import React, { useEffect, useState } from 'react'
import Card from "../card/Card";
import moment from "moment/moment";

const CardList = () => {

  const [data, setData] = useState([]);
  const [includes, setIncludes] = useState([]);

  let testFilter; 

  const fetchData = async () => {
    fetch("http://localhost:3000/stores")
    .then((res) => res.json())
    .then((data) => {
      setData(data.data);
    });
  }

  const fetchIncludes = async () => {
    fetch("http://localhost:3000/stores")
    .then((res) => res.json())
    .then((data) => {
      setIncludes(data.included);
    });
  }

  const filterByName = () => {
    testFilter = includes.filter(element => element.type === 'books').sort((a , b) => b.attributes.copiesSold - a.attributes.copiesSold);
  }

  useEffect(() => {
    fetchData()
    fetchIncludes()
  }, []);
  
  if(!data.length) return <div>Loading...</div>

  return (
   <div>
    <button onClick={() => filterByName()}>TEST THE FUNCTION </button>
    <button onClick={() => console.log(data, includes)}>TEST THE API </button>
    <button onClick={() => console.log(testFilter)}>TEST THE CONSOLE LOG FILTER </button>
    <button onClick={() => console.log(data[0].relationships.books.data)}>TEST THE BOOKS </button>
    {data.sort((a,b) =>  { return b.attributes.rating - a.attributes.rating}).map((data) => (
       <Card
        key={data.id} 
        name={data.attributes.name}
        img={data.attributes.storeImage}
        rating={data.attributes.rating}
        website={data.attributes.website}
        date={moment(data.attributes.establishmentDate, "YYYY-MM-DD").format("DD.MM.YYYY")}
        data={data}
        includes={includes.filter(element => element.type === 'books').sort((a , b) => b.attributes.copiesSold - a.attributes.copiesSold)}
        authors={includes.filter(element => element.type === 'authors')}
       />
    ))}
   </div>
  )
}

export default CardList