import React, { useState } from 'react';
import Empty from "../../assets/images/empty-star.png";
import Star from "../../assets/images/star.png";
import './rating.css';

    const Rating = ({rating}) => {

    const [rate, setRate] = useState(rating)


    const arr = Array.from(
        {length: 5},
        (_, index) => index + 1
      );

     
            
  return (
    <div className='star-container'>
        {arr.map((index)=> <img key={index} src={index <= rate ? Star : Empty} onClick={()=> setRate(index)} alt="star" className='star' />)}

    </div>
  )
}

export default Rating