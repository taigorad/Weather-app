import axios from "axios"
import { useState } from "react"
import "./Find_weather.css"

const Find_weather=()=>{
 
 
 
 
    const [Listdata, setListdata] = useState([]);
  const [data, setData] = useState({})
  const [location, setLocation] = useState('');
  const [error, setError] = useState(false)
  
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=5b4fbcf7d6e509eb53c9da99b0420765`)
        .then((response) => {
          setData(response.data)
          setError(false)
        }).catch((err)=>{
          console.log(err.message);
          setError(true)
          setData({});
        })
      setListdata((alldata)=>{
        return [...alldata,location]
      });  
      setLocation('')
      console.log(Listdata)
      console.log(data)
    }
  }
  return (
    <div className="container">
    
      <div className="SearchBar">
        <input
          type="text"
          placeholder="Enter City Name and Press Enter"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          // here i use onKeypress for event handeling
          onKeyPress={searchLocation}
          value={location}
        />
      
        
      </div>
    
      
      
      
      
      
      
      
      
      <div className="Temp-details">

{
   !location && data.name &&
   <div>
   <h2>Weather deatials of the city : {data.name}</h2>
  {
   data.name && 
   <div>
   <h4>Current temperature : {data.main.temp}<sup>0</sup>C</h4> 
   <h4>temperature range: {data.main.temp_min}<sup>0</sup>C   to {data.main.temp_max}<sup>0</sup>C</h4>
   <h4>Humidity: {data.main.humidity}</h4> 
   <h4>sea level : {data.main.sea_level}</h4> 
   <h4>ground level : {data.main.grnd_level}</h4> 
   </div>
  }

 </div>
 }
 {
   error &&
   <h4 className="validCity">Enter valid City Name</h4>
  }

 {
   location &&
   <h4>Last {Listdata.length} Entries
   <ul>
     {Listdata.map((item, index) => {
       return <li key={index}>{item}</li>;
     })}
   </ul>
 </h4>
 }
 </div>
 




    </div>
  );
}





export default Find_weather