import Home from "./page/home/Home";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import DetailPage from "./page/DetailPage";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/photos/:id" element={<DetailPage/>}/>
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
