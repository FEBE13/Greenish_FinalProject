import React from "react";
import news from "../assets/news.json";
import Lottie from "lottie-react";
function HeaderNews() {
   return (
      <div style={{ marginBottom: "50px" }} className="row container-aboutus">
         <div className="col-lg-6 col-xs-12">
            <div style={{marginTop: "50px"}} className="col text-banner">
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
         </div>
         <div className="col-lg-6 col-xs-12">
            <Lottie animationData={news} />
         </div>
      </div>
      
   );
}

export default HeaderNews;
