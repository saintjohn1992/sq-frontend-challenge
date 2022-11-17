import "./cardlist.css"
import React, { useEffect, useState } from 'react'
import Card from "../card/Card";
import moment from "moment/moment";

const CardList = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchLocation = async () => {
      await fetch("http://localhost:3000/stores")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        console.log(data)
      });
    };
    fetchLocation()
  }, []);
  
  if(!data.length) return <div>Loading...</div>

  return (
   <div>
    {data.sort((a,b) =>  { return b.attributes.rating - a.attributes.rating}).map((data) => (
       <Card
       key={data.id} 
       name={data.attributes.name}
       img={data.attributes.storeImage}
       rating={data.attributes.rating}
       website={data.attributes.website}
       date={moment(data.attributes.establishmentDate, "YYYY-MM-DD").format("DD.MM.YYYY")}
       />
    ))}
   </div>
  )
}

export default CardList