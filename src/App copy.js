// import logo from './logo.svg';
import './App.css';
import  {useState} from 'react'
import { GiphyFetch} from '@giphy/js-fetch-api'

const giphy = new GiphyFetch('u2wPuK37GvUVMCZ2MMKz5pTR1veIBcUO')

let App = () => {
  const [text, setText] = useState('')
  const [result, setResults] = useState([])
  const [err, setErr] = useState(false)
// fetch using axios
// and return them 
const handlInput = (e) => {
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
    console.log(res)
    setResults(res.data)
  }

  apiCall()
  setText('')
  setErr(false)
}

}

export default App;
