import React, { useEffect, useState } from 'react'
import './carselection.css'
import Caritemlist from './reuseable/Caritemlist';
import Pagination from './reuseable/Pagination';


const CarListSection = () => {

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])


  const url = "https://raw.githubusercontent.com/itemsapi/itemsapi-example-data/master/items/cars.json"

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then (
      (result) => {
        setIsLoaded(true)
        console.log(result)
        setItems(result)
      },
      //handling erros 
    (error) => {
      setIsLoaded(true)
      setError(error)
    }
    )
  }, [setItems])

  //code for the pagation below 
  
  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(15);

  const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPosts = items.slice(firstPostIndex, lastPostIndex)
    // console.log(currentPosts)
   
    //returning multiple pages 
    if (error) {
      return <div className='result-message'>
        {error.message} 
          <p>Might be internet error or an error from our end. </p> 
          <p>Please try reloading the website</p>

      </div>
    } else if (!isLoaded) {
      return <div className='result-message'>
        loading.......
      </div>
    } else {

      return (
       <div className='data-contain'>

         <div className="search-wrapper" >
                        <label htmlFor="search-form" className='search-form'>
                            <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="search-input"
                                placeholder="Search for..."
                            />
                            <span className="sr-only">Search countries here</span>
                        </label>
                    </div>

                    <div className='list-head'>
                      <p className='main-p'>Collection</p>
          <h2 className='main-h2'>Our Collection Cars </h2>
                    </div>
        <div className='sectionone-main'>
          
        <Caritemlist items={currentPosts} />
        <Pagination 
        totalPosts={items.length} 
        postPerPage={postPerPage} 
        setCurrentPage={setcurrentPage}
        currentPage={currentPage}
        />
        </div>
       </div>
      )
    }
}

export default CarListSection