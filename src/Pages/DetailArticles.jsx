import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getArticles } from "../Redux/Action/ArticlesAction";
import Navi from "../Components/Navi";
import Footer from "../Components/Footer";

function DetailArticles() {
   const { pathname } = useLocation();
   const { id } = useParams();
   const nav = useNavigate();
   const dispatch = useDispatch();
   const data = useSelector((state) => state.Articles);
   const articles = data.articles;
   console.log(articles);

   useEffect(() => {
      document.documentElement.scrollTo({
         top: 0,
         left: 0,
         behavior: "instant", // Optional if you want to skip the scrolling animation
      });
   }, [pathname]);
   useEffect(() => {
      dispatch(getArticles());
   }, []);
   return (
      <div>
         <Navi />
         {articles.map((item, index) => {
            if (item._id === id) {
               const date = new Date(item.date).getDate();
               const year = new Date(item.date).getFullYear();
               const month = new Date(item.date).toLocaleString("id", {
                  month: "long",
               });
               const dates = `${date} ${month} ${year}`;
               return (
                  <div className="container  mb-3" key={item._id}>
                     <center>
                        <h1 style={{margin: "20px 0px"}}>{item.title}</h1>
                     </center>
                     <div style={{ display: "flex" }}>
                        <div>
                           <img
                              src="https://res.cloudinary.com/dk55ik2ah/image/upload/v1669799345/blank-profile-picture-973460-1280-605aadc08ede4874e1153a12_ssgkx2.jpg"
                              alt=""
                              style={{
                                 width: "50px",
                                 height: "50px",
                                 borderRadius: "50px",
                              }}
                           />
                        </div>
                        <div style={{marginLeft: "10px"}}>
                           <h4 style={{marginBottom: "0px" }}>{item.author}</h4>

                           <p>{dates}</p>
                        </div>
                     </div>
                     {/* <button
                        style={{
                           padding: "5px 8px",
                           borderRadius: "10px",
                           backgroundColor: "rgb(56, 167, 85)",
                           margin: "10px 0px",
                        }}
                     >
                        Like
                     </button> */}
                     <center>
                        <img
                           className="image-article card-img-top"
                           src={item.poster}
                           alt=""
                        />
                     </center>
                     <div className="card-body">
                        <p className="card-text" style={{margin: "20px 0px"}}>{item.content}</p>
                     </div>
                  </div>
               );
            }
         })}
         <Footer />
      </div>
   );
}

export default DetailArticles;
