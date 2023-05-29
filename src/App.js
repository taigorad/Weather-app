import {BrowserRouter,Route,Routes} from "react-router-dom"
import Find_weather from "./component/Weather/Find_weather";
import Main_page from "./component/main-page/Main_page";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main_page/>}/>
      <Route path="/Find_weather" element={<Find_weather/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}
export default App;
