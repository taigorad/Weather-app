import {Navigate, useNavigate} from "react-router-dom"
import "./Main_page.css"

const Main_page=()=>{

    const navigate=useNavigate()
    // here usenavigation uses for navigation of page
   
   
   
   return (<div>
                 <h1 className="Heder_of_page">WEATHER APP USING REACT </h1>
                 <div className="weather_app"> <div className="image"> 
                     <img  src="https://www.southernmarylandchronicle.com/wp-content/uploads/2017/12/mixed-weather-800x445.jpg"/*src="/image/a.jpg"*/ alt="hi"/></div>
                     <div > <h2 className="header">Click Given Below Button To Check And Enjoy Your City Weather !!!   </h2>
                     <button onClick={()=>navigate("/Find_weather") }>Click</button></div>
                </div>
             </div>
        
    )
}
export default Main_page