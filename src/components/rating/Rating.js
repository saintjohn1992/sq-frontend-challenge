import React, { useState } from 'react';
import Empty from "../../assets/images/empty-star.png";
import Star from "../../assets/images/star.png";
import './rating.css';

    const Rating = ({rating}) => {

    const [rate, setRate] = useState(rating)


    const arr = Array.from(
        {length: rate},
        (_, index) => index + 1
      );

      const empty = Array.from(
        {length: 5 - rate},
        (_, index) => index + 1
      );
            
  return (
    <div className='star-container'>
        {arr.map(()=> <img src={Star} alt="star" className='star' />)}
        {empty.map(()=> <img src={Empty} alt="star" className='star' />)}
    </div>
  )
}

export default Rating