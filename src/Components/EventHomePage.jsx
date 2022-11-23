import React from "react";

function EventHomePage() {
   return (
      <div className="container event-homepage">
         <div className="row">
            <h1>Event Terbaru</h1>
            <div className="col-lg-4  col-xs-12 card text-white card-event-homepage">
               <img
                  className="img-event-homepage"
                  src="https://res.cloudinary.com/dk55ik2ah/image/upload/v1669165351/Image_ve7hce.png"
                  alt=""
               />
               <div className="text-event-homepage card-img-overlay">
                  <h4>Bebas Polusi Plastik</h4>
                  <p>
                  Dorong pemerintah dan korporasi untuk menekan penggunaan
                     plastik sekali pakai dan berhenti mencemari lingkungan
                  </p>
                  <button className="btn-event-homepage">See more</button>
               </div>
            </div>
            <div className="col-lg-4 col-xs-12 card text-white card-event-homepage">
               <img
                  className="img-event-homepage"
                  src="https://res.cloudinary.com/dk55ik2ah/image/upload/v1669165351/Image_ve7hce.png"
                  alt=""
               />
               <div className="text-event-homepage card-img-overlay">
                  <h4>Bebas Polusi Plastik</h4>
                  <p>
                  Dorong pemerintah dan korporasi untuk menekan penggunaan
                     plastik sekali pakai dan berhenti mencemari lingkungan
                  </p>
                  <button className="btn-event-homepage">See more</button>
               </div>
            </div>
            <div className="col-lg-4 col-xs-12 card text-white card-event-homepage">
               <img
                  className="img-event-homepage"
                  src="https://res.cloudinary.com/dk55ik2ah/image/upload/v1669165351/Image_ve7hce.png"
                  alt=""
               />
               <div className="text-event-homepage card-img-overlay">
                  <h4>Bebas Polusi Plastik</h4>
                  <p>
                     Dorong pemerintah dan korporasi untuk menekan penggunaan
                     plastik sekali pakai dan berhenti mencemari lingkungan
                  </p>
                  <button className="btn-event-homepage">See more</button>
               </div>
            </div>
         </div>
         <button className="btn-informasiall-homepage">Lihat Semua</button>
      </div>
   );
}

export default EventHomePage;
