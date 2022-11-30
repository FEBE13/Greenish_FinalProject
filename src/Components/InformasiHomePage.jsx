import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../Redux/Action/ArticlesAction";
import { useNavigate } from "react-router-dom";
function InformasiHomePage() {
   const nav = useNavigate();
   const dispatch = useDispatch();
   const data = useSelector((state) => state.Articles);
   const item = data.articles;
   const [nam,setName] = useState("")
   // console.log(item);

   useEffect(() => {
      dispatch(getArticles());
   }, []);
   return (
      <div className="container container-informasi-homepage">
         <h1>Informasi terbaru kami</h1>
         <div className="row row-cols-1 row-cols-lg-4 g-4">
            {item.map((item, index) => {
               // const ctn = (item.content).toString()  
               return (
                  <div className="col" onClick={() => {nav(`/articles/${item._id}`)}} key={item._id}>
                     <div className="card h-100">
                        <img
                           src={item.poster}
                           className="card-img-top"
                           alt="..."
                        />
                        <div className="card-body">
                           <h5 className="card-title">
                              {item.title}
                           </h5>
                           <p className="card-text">
                           {item.content ? item.content.slice(0,100) : ''}
                           </p>
                        </div>
                     </div>
                  </div>
               );
            })}

         </div>
         <button className="btn-informasiall-homepage">Lihat semua</button>
      </div>
   );
}

export default InformasiHomePage;
