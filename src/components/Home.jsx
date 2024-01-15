/* eslint-disable react/prop-types */

import Card from "./Card"


function Home({data, userName}) {

    
  return (
    <div className='card__parent'>
        {
        data.results.map(e => 
          <Card key={e.id} image={e.background_image} name={e.name} price={randomPrice()} userName={userName}/> 
          )
      }
    </div>
  )
}

function randomPrice() {
    return Math.floor(Math.random() * 300) + 200
  }

export default Home

