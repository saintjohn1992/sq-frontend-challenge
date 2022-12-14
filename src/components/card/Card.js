import { useEffect, useState } from 'react';
import Rating from '../rating/Rating';
import Table from "../table/Table";
import "./card.css"

const Card = ({name, img, rating, website, date, flag, dataShop, authors, includes, fetchedData, fetchedIncludes, includesCountries}) => {

  const [books, setBooks] = useState([])
  const [countries, setCountries] = useState("");

  const creatingBooks = () => {
    if(dataShop.relationships.books !== undefined){
        dataShop.relationships.books.data.map((book, index) => {
          setBooks(books => [...books, {
           name: includes.filter(element => element.id === book.id)[0].attributes.name,
           authors: authors.filter(element => element.id === includes.filter(element => element.id === book.id)[0].relationships.author.data.id)[0].attributes.fullName,
           copiesSold: includes.filter(element => element.id === book.id)[0].attributes.copiesSold
          }])
         })
      books.sort((a , b) => b.copiesSold - a.copiesSold)
    }
  }

  const findingCountries = async () => {

    console.log('here test', includesCountries, dataShop.id)
    let countriesFilter = await includesCountries.filter(element => element.id === dataShop.relationships.countries.data.id)
    console.log('here result', countriesFilter)
    if(countriesFilter[0] !== undefined){
      fetch(`https://restcountries.com/v3.1/alpha/${countriesFilter[0].attributes.code}`)
        .then((res) => res.json())
        .then((data) => {
          setCountries(data[0].flags.png);
      })
    }
  }

  useEffect(() => {
    findingCountries()
  }, [])

  useEffect(() => {
    creatingBooks()
  }, [])

  return (
    <div className="card-container">
          <img src={img} alt="store" className="img-container" />
        
      <div className="card-content">
        <p className="card-title">{name}</p>
        <Rating rating={rating} dataShop={dataShop}/>
        <p className='t-title'>Best-selling books</p>
        { books.length ?
          <Table haveBook={true} books={books}/>
          :
          <Table haveBook={false} />
        }
        <p></p>
        <p className='website'>- {website}</p>
        <p className='date'>{date}</p>
        { countries !== "" &&
          <img className='image-flag' src={countries} alt="img" />
        }
      
      </div>
    </div>
  )
}

export default Card