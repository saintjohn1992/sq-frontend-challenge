import React from 'react'
import Table from "../table/Table";
import "./card.css"

const Card = ({name, rating, SntoreImage, website, establishmentDate,}) => {

 
  return (
    <div className="card-container">
          <img src={''} alt="" className="img-container" />
       
      <div className="card-content">
        <div className="card-title"></div>
        <Table></Table>
      </div>
      
       </div>
  )
}

export default Card