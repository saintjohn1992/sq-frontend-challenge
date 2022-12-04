import React from 'react'
import './table.css';

const Table = (props) => {
  return (
    <div className='table'>
      { props.haveBook ?
      <>        
        <div style={{display: 'flex', justifyContent: "flex-end"}}>
          <p style={{marginRight: '3em'}}>{props.books[0].name}</p>
          <p style={{marginRight: '3em'}}>{props.books[0].authors}</p>
        </div>
        { props.books[1] !== undefined &&
          <div style={{display: 'flex', justifyContent: "flex-end"}}>
            <p style={{marginRight: '3em'}}>{props.books[1].name}</p>
            <p style={{marginRight: '3em'}}>{props.books[1].authors}</p>
          </div>
        }
      </>
      : 
      <p>no data available</p>
      }

    </div>
  )
}

export default Table