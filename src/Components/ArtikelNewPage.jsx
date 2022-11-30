import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../Redux/Action/ArticlesAction";
import { useNavigate } from "react-router-dom";
function ArtikelNewsPage() {
   const nav = useNavigate();
   const dispatch = useDispatch();
   const dataArticles = useSelector((state) => state.Articles);
   const item = dataArticles.articles;
   useEffect(() => {
      dispatch(getArticles());
   }, []);
   return (
      <div className="container">
         <div className="row">
            <div className="col-lg-6 col-xs-12 artikel-news-page1">
               <div>
                  <h1>Dampak negatif dari pembakaran hutan</h1>
                  <img className="img-artikel-news-page1"
                     src="https://res.cloudinary.com/ddhkwq4zk/image/upload/v1669308067/Rectangle_1321_d2s2cc.png"
                     alt=""
                  />
               </div>
               <div className="artikel-news-page-teks">
                  <p>
                     Dampak negatif dari pembakaran hutan yaitu bisa menyebabkan
                     polusi udara, gangguan penerbangan, gangguan pernapasan,
                     dan gangguan alam lainnya
                  </p>
                  <button className="btn-readmore-news">Read more</button>
               </div>
            </div>
            <div className="col-lg-6 col-xs-12 artikel-news-page-kanan">
               <div className="card mb-3 card-artikel-newspage-kanan" style={{ maxWidth: "750px" }}>
                  <div className="row g-0 div-row">
                     <div className="col-md-4">
                        <img
                           src="https://res.cloudinary.com/ddhkwq4zk/image/upload/v1669561508/image_6_jknjxd.png"
                           className="img-fluid rounded-start img-artikel-newspage-kanan"
                           alt="..."
                        />
                     </div>

                     <div className="col-md-8">
                        <div className="card-body">
                           <h5 className="card-title">
                              Yang hilang dari pidato kenegaraan jokowi
                           </h5>
                           <p className="card-text">
                              This is a wider card with supporting text below as
                              a natural lead-in to additional content. This
                              content is a little bit longer.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               {item.slice(0,3).map((item, index) => {
                  return(
                     <div className="card mb-3" style={{ maxWidth: "750px" }}>
                  <div className="row g-0">
                     <div className="col-md-4">
                        <img
                           src="https://res.cloudinary.com/ddhkwq4zk/image/upload/v1669561508/image_6_jknjxd.png"
                           className="img-fluid rounded-start"
                           alt="..."
                        />
                     </div>

                     <div className="col-md-8">
                        <div className="card-body">
                           <h5 className="card-title">
                              Yang hilang dari pidato kenegaraan jokowi
                           </h5>
                           <p className="card-text">
                              This is a wider card with supporting text below as
                              a natural lead-in to additional content. This
                              content is a little bit longer.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
                  )
               })}
               {/* <div className="card mb-3" style={{ maxWidth: "750px" }}>
                  <div className="row g-0">
                     <div className="col-md-4">
                        <img
                           src="https://res.cloudinary.com/ddhkwq4zk/image/upload/v1669561508/image_6_jknjxd.png"
                           className="img-fluid rounded-start"
                           alt="..."
                        />
                     </div>

                     <div className="col-md-8">
                        <div className="card-body">
                           <h5 className="card-title">
                              Yang hilang dari pidato kenegaraan jokowi
                           </h5>
                           <p className="card-text">
                              This is a wider card with supporting text below as
                              a natural lead-in to additional content. This
                              content is a little bit longer.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="card mb-3" style={{ maxWidth: "750px" }}>
                  <div className="row g-0">
                     <div className="col-md-4">
                        <img
                           src="https://res.cloudinary.com/ddhkwq4zk/image/upload/v1669561508/image_6_jknjxd.png"
                           className="img-fluid rounded-start"
                           alt="..."
                        />
                     </div>

                     <div className="col-md-8">
                        <div className="card-body">
                           <h5 className="card-title">
                              Yang hilang dari pidato kenegaraan jokowi
                           </h5>
                           <p className="card-text">
                              This is a wider card with supporting text below as
                              a natural lead-in to additional content. This
                              content is a little bit longer.
                           </p>
                        </div>
                     </div>
                  </div>
               </div> */}
            </div>
         </div>
      </div>
   )
}
export default ArtikelNewsPage