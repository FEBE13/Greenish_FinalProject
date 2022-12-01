import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navi from "./Components/Navi";
import HomePage from "./Pages/Homepages";
import Event from "./Pages/Event";
import News from "./Pages/News";
import Aboutus from "./Pages/Aboutus";
import DetailEvent from "./Pages/DetailEvent";
import AddEvent from "./Pages/AddEvent";
import AddArticles from "./Pages/AddArticles";
import DetailArticles from "./Pages/DetailArticles";
import DashboardAdmin from "./Pages/DashboardAdmin";
import DashboardUser from "./Pages/DashboardUser";
import PostAdmin from "./Pages/PostAdmin";
import PostArticle from "./Pages/PostArticle";
import PostEvent from "./Pages/PostEvent";

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/event" element={<Event />} />
            <Route exact path="/event/:id" element={<DetailEvent />} />
            <Route exact path="/articles/:id" element={<DetailArticles />} />
            {/* <Route exact path="/addevent" element={<AddEvent />} /> */}
            {/* <Route path="/detailartikel/:id" element={<DetailArticle />} /> */}
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/addevent" element={<AddEvent />} />
            <Route path="/addarticles" element={<AddArticles />} />
            <Route path="/news" element={<News />} />
               <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
               <Route path="/dashboardUser" element={<DashboardUser />} />
            <Route path="/pstam" element={<PostAdmin />} />
            <Route path="/pstar" element={<PostArticle />} />
            <Route path="/pstev" element={<PostEvent />} />
            {/* <Route path="/register" element={<Register />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
            
         </Routes>
      </>
   );
}

export default App;
