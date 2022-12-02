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
                  <h1>Raja Ampat: Surga Petualangan Dunia di Ujung Papua</h1>
                  <img
                     className="img-artikel-news-page1"
                     src="https://res.cloudinary.com/dk55ik2ah/image/upload/c_scale,w_260/v1668866828/Raja_Ampat__Mutiara_Indah_di_Timur_Indonesia_wbc3fs.jpg"
                     alt=""
                  />
               </div>
               <div className="artikel-news-page-teks">
                  <p>
                     Raja Ampat adalah sebuah kabupaten dan merupakan bagian
                     dari Propinsi Papua Barat. Untuk mencapai Kepulauan ini,
                     kita harus menginjakkan kaki di kota Sorong terlebih
                     dahulu. Biasanya para wisatawan banyak menggunakan
                     penerbangan untuk sampai ke kota ini. Setelah sampai kota
                     Sorong
                  </p>
                  <button onClick={() => {
                     nav(`/articles/6384d5a83a5f1ba5f9185dac`)
                  }} className="btn-readmore-news">Read more</button>
               </div>
            </div>
            <div className="col-lg-6 col-xs-12 artikel-news-page-kanan">
               <div className="ScrollStyle">
                  {item.slice(1, 3).map((item, index) => {
                     return (
                        <div
                           onClick={() => {
                              nav(`/articles/${item._id}`);
                           }}
                           key={item._id}
                           className="card mb-3"
                           style={{ maxWidth: "750px" }}
                        >
                           <div className="row g-0">
                              <div className="col-md-4">
                                 <img
                                    src={item.poster}
                                    className="img-fluid rounded-start"
                                    alt="..."
                                 />
                              </div>

                              <div className="col-md-8">
                                 <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">
                                       {item.content
                                          ? item.content.slice(0, 100)
                                          : ""}
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
   );
}
export default ArtikelNewsPage;
