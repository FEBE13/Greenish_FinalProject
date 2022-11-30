import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../Redux/Action/ArticlesAction";
import { useNavigate } from "react-router-dom";
function InformasiHomePage() {
   const nav = useNavigate();
   const dispatch = useDispatch();
   const dataArticles = useSelector((state) => state.Articles);
   const itemArticles = dataArticles.articles;
   console.log("ini dari halaman informasi", itemArticles);
   const [nam, setName] = useState("");
   // console.log(item);

   useEffect(() => {
      dispatch(getArticles());
   }, []);
   return (
      <div className="container container-informasi-homepage">
         <h1>Informasi terbaru kami</h1>
         <div className="row row-cols-1 row-cols-lg-4 g-4">
            {itemArticles.slice(0, 4).map((itemArticles, index) => {
               // const ctn = (item.content).toString()
               return (
                  <div
                     className="col"
                     onClick={() => {
                        nav(`/articles/${itemArticles._id}`);
                     }}
                     key={itemArticles._id}
                  >
                     <div className="card h-100">
                        <img
                           src={itemArticles.poster}
                           className="card-img-top"
                           alt="..."
                        />
                        <div className="card-body">
                           <h5 className="card-title">{itemArticles.title}</h5>
                           <p className="card-text">
                              {itemArticles.content
                                 ? itemArticles.content.slice(0, 100)
                                 : ""}
                           </p>
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
         <button
            onClick={() => nav("/news")}
            className="btn-informasiall-homepage"
         >
            Lihat semua
         </button>
      </div>
   );
}

export default InformasiHomePage;
