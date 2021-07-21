// import logo from './logo.svg';
import './App.css';
import  React, {useState} from 'react'
import { GiphyFetch} from '@giphy/js-fetch-api'
import TextList from './TextList'
import Error from './Error'
import Test from './Test'

const giphy = new GiphyFetch('u2wPuK37GvUVMCZ2MMKz5pTR1veIBcUO')

// const { data: gifs } = await gf.trending({ limit: 10 })

let App = () => {
  const [text, setText] = useState('')
  const [result, setResults] = useState([])
  const [err, setErr] = useState(false)

// and return them 
const handleInput = (e) => {
  setText(e.target.value)
}

const handleSubmit = (e) => {
  if(text.length === 0){
    console.log("error")
    setErr(true)
    return
  }
  console.log(text)

  const apiCall = async () => {
    const res = await giphy.animate(text, {limit: 20})
    // const res = await giphy.search("dogs", { sort: "recent", limit:20 })
    console.log(res)
    setResults(res.data)
  }
  apiCall()
  setText('')
  setErr(false)
}





return (
  <div className="App">
    <h1>Animated Text Generator</h1>
    <h3>type here</h3>
    <input type='text' className='input-field' value={text} onChange={handleInput} />
    {/* <input value={text} onchange={handleInput} /> */}
    <button className='submit-btn' onClick={handleSubmit}>Submit</button>
    <Test />
    <Error isError={err} text='need length longer than 0 for input'/>
    {result && <TextList id= {result.id} gifs={result} />}

  </div>
)

}

export default App;
