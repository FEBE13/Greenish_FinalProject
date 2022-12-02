import Lottie from "lottie-react";
import tutorial from "../assets/tutorial.json";

function TutorialNewsPage() {
   return (
      <div className="container Tutorial1NewsPage">
         <h1>Our Tutorial</h1>
         <center>
            <Lottie style={{ maxWidth: "700px" }} animationData={tutorial} />
         </center>
         <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
               <div className="card h-100">
                  <iframe
                     className="videoyt"
                     src="https://www.youtube.com/embed/-UDCt8zRYhQ"
                     title="YouTube video player"
                     frameBorder="0"
                     // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     // allowFullScreen
                  ></iframe>
                  <div className="card-body">
                     <h5 className="card-title">
                        Cara mencegah kebakaran hutan
                     </h5>
                  </div>
               </div>
            </div>
            <div className="col">
               <div className="card h-100">
                  <iframe
                     // width=""
                     // height="315"
                     src="https://www.youtube.com/embed/ZZdRTjrb5ks"
                     title="YouTube video player"
                     frameBorder="0"
                     // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     // allowFullScreen
                  ></iframe>
                  <div className="card-body">
                     <h5 className="card-title">
                        Cara menanggulangi jika terkena banjir
                     </h5>
                  </div>
               </div>
            </div>
            <div className="col">
               <div className="card h-100">
                  <iframe
                     src="https://www.youtube.com/embed/Z8bkAzRolpA"
                     title="YouTube video player"
                     frameBorder="0"
                     // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     // allowFullScreen
                  ></iframe>
                  <div className="card-body">
                     <h5 className="card-title">
                        Cara mencegah pemanasan global
                     </h5>
                  </div>
               </div>
            </div>
                     
         </div>
      </div>
   );
}
export default TutorialNewsPage;
