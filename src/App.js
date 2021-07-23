import React, { useState, useEffect } from "react"
import axios from 'axios'
// import { response } from "express"

const App = () => {

  const [image, setImage] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://api.giphy.com/v1/gifs/trending`
        const result = await axios( url,{
          params: {
            api_key: "67MizVVVBOd8kXUjIdUH7I6zz7z2CDB3",
            limit: 20,
          rating:'r'
          }
        })
        // console.log(result)
        setImage(result.data.data)
        console.log(image);
      }
      catch(err){
        console.log("error");
      }
    }
   fetchData() 
  }, [])

  return (
    <div>
       <div> Hello Wolrd</div> 
       {console.log(image)}
       {/* <img alt='' src={image.data[0].url}/> */}
    </div>
    
    
  )

}

export default App
