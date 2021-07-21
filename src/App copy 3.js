// import logo from './logo.svg';
import './App.css';
import  React, {useState} from 'react'
import { GiphyFetch} from '@giphy/js-fetch-api'
import TextList from './TextList'
import Error from './Error'

const giphy = new GiphyFetch('u2wPuK37GvUVMCZ2MMKz5pTR1veIBcUO')

let App = () => {
  const [text, setText] = useState('')
  const [result, setResults] = useState([])
  const [err, setErr] = useState(false)
// fetch using axios
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


}

const apiCall = async () => {
  const res = await giphy.animate(text, {limit: 20})
  console.log(res)
  // setResults(res.data)
}

apiCall()
setText('')
setErr(false)

return (
  <div className="App">
    <h1>Animated Text Generator</h1>
    <h3>type here</h3>
    <input className='input-field' value={text} onchange={handleInput} />
    <button className='submit-btn' onClick={handleSubmit}>Submit</button>
    <Error isError={err} text='need length longer than 0 for input'/>
    {result && <TextList gifs={result} />}
  </div>
)

}

export default App;
