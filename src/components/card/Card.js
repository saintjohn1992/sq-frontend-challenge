import CardList from '../cardlist/CardList';
import Rating from '../rating/Rating';
import Table from "../table/Table";
import "./card.css"

const Card = ({name, img, rating, website, date, flag, bk1, bk2, a1, a2}) => {

  return (
    <div className="card-container">
          <img src={img} alt="" className="img-container" />
          <Rating rating={rating}/>
      <div className="card-content">
        <p className="card-title">{name}</p>
        <Table></Table>
        <p>{website}</p>
        <p>{date}</p>
      </div>
      
       </div>
  )
}

export default Card