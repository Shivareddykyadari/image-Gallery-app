import './App.css';
import {useEffect, useState} from "react"
import axios from 'axios'
import Gallery from './Gallery';



function App() {
   const [search,setSearch]=useState('');
   const [data,setData]=useState([])

   const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

const changeHandler=e=>{
  setSearch(e.target.value)
  axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
    response=>{setData(response.data.photos.photo)}
  ).catch(err=>console.log('encountered an error',err))

}
const submitHandler=(e)=>{
  e.preventDefault()
  console.log(search)

}

useEffect(()=>{},[])
  return (
    <div className="App">
      <center>
        <h2>Gallery Snapshots </h2><br/>
        <form onSubmit={submitHandler} >
          <input type='text' value={search} onChange={changeHandler} /><br/><br/>
          <input type='submit' name='Search' />
        </form><br/>

        {data.length>=1? <Gallery data={data}/> :<h4>No data Loaded</h4>}
      </center>
    </div>
  );
}

export default App;
