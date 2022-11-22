import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navi from "./Components/Navi";
import HomePage from "./Pages/Homepages";
import Event from "./Pages/Event";
import News from "./Pages/News";
import Aboutus from "./Pages/Aboutus";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/event" element={<Event />} />
        {/* <Route exact path="/detail/:id" element={<DetailEvent />} /> */}
        {/* <Route exact path="/addevent" element={<AddEvent />} /> */}
        {/* <Route path="/detailartikel/:id" element={<DetailArticle />} /> */}
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/news" element={<News />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
