import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import lovenature from "../assets/lovenature.json";
function BannerHomePage() {
   const nav = useNavigate();
   return (
      <div className="container banner-awal">
         <div className="row" style={{ maxWidth: "100%", margin: "auto" }}>
            <div className="col-lg-6 col-xs-12 text-banner">
               <h3
                  style={{
                     color: "#686868",
                     fontSize: "30px",
                     fontWeight: "600",
                  }}
               >
                  Mari Bergabung Bersama!
               </h3>
               <h1
                  style={{
                     fontSize: "45px",
                     fontWeight: "700",
                     letterSpacing: "0.5px",
                  }}
               >
                  Greenish.
               </h1>
               <h3
                  style={{
                     color: "#686868",
                     fontSize: "28px",
                     fontWeight: "500",
                  }}
               >
                  Kami tidak bisa melakukannya
               </h3>
               <h3
                  style={{
                     color: "#686868",
                     fontSize: "28px",
                     fontWeight: "500",
                  }}
               >
                  tanpa kamu
               </h3>
               <div style={{ marginTop: "15px" }}>
                  <button
                     className="jelajahi"
                     style={{
                        border: "none",
                        fontSize: "20px",
                        fontWeight: "500",
                     }}
                     onClick={() => nav("/news")}
                  >
                     Jelajahi Sekarang
                  </button>
               </div>
            </div>
            <div className="col-lg-6 col-xs-12 img-banner" style={{}}>
               <Lottie animationData={lovenature} />
            </div>
         </div>
      </div>
   );
}

export default BannerHomePage;
