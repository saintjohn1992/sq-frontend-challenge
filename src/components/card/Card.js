import { useEffect } from 'react';
import CardList from '../cardlist/CardList';
import Rating from '../rating/Rating';
import Table from "../table/Table";
import "./card.css"

const Card = ({name, img, rating, website, date, flag, data, authors, includes}) => {

  let books = [];

  const creatingBooks = () => {
    if(data.relationships.books){
      data.relationships.books.data.map((item, index) => {
       books.push({
        id: item.id,
        name: includes.filter(element => element.id === item.id)[0].attributes.name,
        authors: authors.filter(element => element.id === includes.filter(element => element.id === item.id)[0].relationships.author.data.id)[0].attributes.fullName
       })
      })
      books.sort()
    }
  }

  return (
    <div className="card-container">
          <img src={img} alt="store" className="img-container" />
          <Rating rating={rating}/>
      <div className="card-content">
        <p className="card-title">{name}</p>
        <Table />
        <p></p>
        <p className='website'>-{website}</p>
        <p className='date'>{date}</p>
        <img src={flag} alt="flag" className="flag" />
      </div>
      <button onClick={() => creatingBooks()}>RUN THE FUNCTION</button>
      <button onClick={() => console.log(books)}>TEST THE FUNCTION AGAIN</button>
       </div>
  )
}

export default Card