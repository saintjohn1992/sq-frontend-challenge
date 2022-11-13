import React, { useEffect, useState } from 'react'
import "./card.css"

const Card = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchLocation = async () => {
      await fetch("http://localhost:3000/stores")
      .then((res) => res.json())
      .then((data) => { 
        setData(data);
        console.log(data);
      });

    };
    fetchLocation();
  }, []);

  if(!data.length) return <div>Loading...</div>

  return (
    <div className="card-container">
        <div>
        
        </div>
        

        </div>
  )
}

export default Card