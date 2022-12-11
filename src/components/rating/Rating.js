import React, { useState } from 'react';
import Empty from "../../assets/images/empty-star.png";
import Star from "../../assets/images/star.png";
import './rating.css';

    const Rating = ({rating, dataShop}) => {

      const [rate, setRate] = useState(rating)

      const arr = Array.from(
        {length: 5},
        (_, index) => index + 1
      );

      //Attepmted post request but unsuccessful. Keeps returning CORS blocking error.

     /* const changeRatings = () => {
        fetch('http://localhost:3000/', {
          method: 'POST',
          mode: 'cors', 
          body: {

          },
          headers: {
            'Content-type': 'application/vnd.api+json',
            'Accept': 'application/vnd.api+json',
            'X-CSRF-Token': 'fakeServerStorage',
          },
        })
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
          })
         .catch((err) => {
            console.log(err.message);
         });
      }
            */
  return (
    <div className='star-container'>
        {
          arr.map((index) => 
            <img 
              key={index} 
              src={index <= rate ? Star : Empty} 
              //onClick={()=> changeRatings()} 
              onClick={()=> setRate(index)}
              alt="star" 
              className='star' 
            />
            )
        }
    </div>
  )
}

export default Rating