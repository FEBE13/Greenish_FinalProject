import React from "react";

function HeaderNews() {
   return (
      <div>
         <div className="container banner-awal">
            <div className="row" style={{ maxWidth: "100%" }}>
               <div className="col text-banner">
                  <h1
                     style={{
                        fontSize: "45px",
                        fontWeight: "700",
                        letterSpacing: "0.5px",
                     }}
                  >
                     Greenish News
                  </h1>
                  <h3
                     style={{
                        color: "#686868",
                        fontSize: "28px",
                        fontWeight: "500",
                     }}
                  >
                     Update wawasan kamu dengan membaca berita terkini yang
                     berhubungan dengan alam
                  </h3>
               </div>
               <div className="col img-banner" style={{}}>
                  <img
                     src="https://res.cloudinary.com/dk55ik2ah/image/upload/v1669910673/5060820_2642704_1-removebg-preview_at3yx0.png"
                     alt=""
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default HeaderNews;
