import React, { useEffect, useRef } from "react";
import aboutus from "../assets/aboutus.json";
// import backgroundgradient from "../assets/backgroundgradient.json";
import Lottie from "lottie-react";
function HeaderAboutUs() {
   return (
      <div>
         <div className="row container-aboutus">
            <div className="col-lg-6 col-xs-12">
               <div className="col text-banner">
                  <h1
                     style={{
                        fontSize: "45px",
                        fontWeight: "700",
                        letterSpacing: "0.5px",
                     }}
                  >
                     About Greenish
                  </h1>
                  <h3
                     style={{
                        color: "#686868",
                        fontSize: "28px",
                        fontWeight: "500",
                     }}
                  >
                     Greenish adalah platform yang bergerak dibidang kelestarian
                     alam, tugas utamanya adalah sebagai komunitas bagi orang
                     orang yang ingin menjaga lingkungan dan mencegah bumi
                     semakin rusak
                  </h3>
               </div>
            </div>
            <div className="col-lg-6 col-xs-12">
               <Lottie animationData={aboutus} />
            </div>
         </div>
      </div>
   );
}

export default HeaderAboutUs;
