import './App.css';
import Loading from './Loading';
import Tours from './Tours';
import { useEffect, useState } from 'react';

function App() {
  const url = "https://course-api.com/react-tours-project"
  const [tours,setTours] = useState([]);
  const [loading,setLoading] = useState(true)

  const fetchTours = async ()=>{
    setLoading(true)
    try{
      const response = await fetch(url);
      const toursResponse = await response.json();
      setLoading(false)
      setTours(toursResponse)
      console.log(tours)
    }catch(e){
      setLoading(false)
      console.log("Error while fetching: "+ e)
    }
  }
  useEffect(()=>{
    fetchTours();
  },[])

  const handleDelete = (id)=>{
    const newTours = tours.filter((tour)=>tour.id!==id)
    setTours(newTours)
  }
  
  return (
    <div className="App">
      <h1 className="Heading">Our Tours</h1>
      <div className="underline"></div>
     {loading && <Loading/>}
     {!loading && <Tours tours={tours} handleDelete={handleDelete}/>}
    </div>
  );
}

export default App;
