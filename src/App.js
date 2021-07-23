import React, { useState } from 'react'
import axios from 'axios'
const Giphy = () => {
  const [search, setSearch] = useState('')
  const [data , setData] = useState([])

 const handleChange = (event) => {
   setSearch(event.target.value)
   console.log(search)
 }

 const handleSubmit = async(event) => {
  
  event.preventDefault()
   try{
     const response = await axios('http://api.giphy.com/v1/gifs/search', {
       params:{
         api_key:'67MizVVVBOd8kXUjIdUH7I6zz7z2CDB3',
        //  api_key:'',
         q: search,
         limit: 10
       }
     })
     console.log(response)
     setData(response.data.data)

    } catch{
      console.log('error')
    }

  }

  const ShowGiphy = () => {
    return data.map(el => {
      return (
        <div>
          <p>Name:{el.title}</p>
          <img alt='' src={el.images.fixed_height.url}/>
            {/* <p>Description:{el.user.description && (<p>no description available</p>)} </p> */}
        </div>
      )
    })
  }





  return (
    <div>
      Search Giphy Here
      <form >
        <input onChange = {handleChange} />
        <button onClick={handleSubmit}  >Search</button>
      </form>
      <div> <ShowGiphy /></div>
    </div>
  )
}

export default Giphy

