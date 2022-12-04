import "./cardlist.css"
import React, { useEffect, useState } from 'react'
import Card from "../card/Card";
import moment from "moment/moment";

const CardList = () => {

  const [data, setData] = useState([]);
  const [includes, setIncludes] = useState([]);

  const fetchData = async () => {
    fetch("http://localhost:3000/stores")
    .then((res) => res.json())
    .then((data) => {
      setData(data.data);
    })
  }

  const fetchIncludes = async () => {
    fetch("http://localhost:3000/stores")
    .then((res) => res.json())
    .then((data) => {
      setIncludes(data.included);
    })
  }

  useEffect(() => {
    fetchData()
    fetchIncludes()
  }, []);
  
  if(!data.length) return <div>Loading...</div>

  return (
   <div>
    <button onClick={() => console.log(data, includes)}>TEST THE DATAS</button>
    { data.length ?
        includes.length ?
          data.sort((a,b) => {return b.attributes.rating - a.attributes.rating}).map((dataShop) => (
            <Card
              key={dataShop.id} 
              name={dataShop.attributes.name}
              img={dataShop.attributes.storeImage}
              rating={dataShop.attributes.rating}
              website={dataShop.attributes.website}
              date={moment(dataShop.attributes.establishmentDate, "YYYY-MM-DD").format("DD.MM.YYYY")}
              dataShop={dataShop}
              includes={includes.filter(element => element.type === 'books').sort((a , b) => b.attributes.copiesSold - a.attributes.copiesSold)}
              includesCountries={includes.filter(element => element.type === 'countries')}
              authors={includes.filter(element => element.type === 'authors')}
            />
          ))
          :
          ""
          :
          ""
    }
   </div>
  )
}

export default CardList