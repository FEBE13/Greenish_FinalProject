import React from "react";

function AboutUsHomepage() {
   return (
      <div className="container">
         <div className="content-aboutus">
            <h1>Apa Itu "GREENISH" ?</h1>
            <p className="teks-1">
               Greenish hadir karena bumi yang rapuh ini perlu suara. Butuh
               solusi. Butuh perubahan. Butuh aksi. Greenish memiliki landasan
               prinsip dan nilai-nilai dasar yang tercermin dalam setiap aksi
               kampanye lingkungan kami..
            </p>
         </div>
         <div className="content-aboutus">
            <h1 id="content2">Apa saja gerakan greenish?</h1>

            <div className="group-card group-card-aboutus">
               <div className="card about-us-list" style={{ width: "18rem" }}>
                  <img
                     src="https://res.cloudinary.com/dk55ik2ah/image/upload/v1666364375/Ecology_Isometric_avcaq8.png"
                     className="card-img-top"
                     alt="..."
                  />
                  <div className="card-body">
                     <div className="tittle">
                        <h5>Kami menjaga lingkungan kita</h5>
                     </div>
                     <p className="card-text">
                        Selama bertahun-tahun, Greenish telah melakukan suatu
                        perubahan positif untuk lingkungan dunia dan juga
                        termasuk Asia Tenggara. Terima kasih atas bantuanmu.
                     </p>
                  </div>
               </div>
               <div
                  className="card about-us-list"
                  style={{ width: "18rem", margin: "5px 0px" }}
               >
                  <img
                     src="https://res.cloudinary.com/dk55ik2ah/image/upload/v1666364423/Recycling__Monochromatic_tcathb.png"
                     className="card-img-top"
                     alt="..."
                  />
                  <div className="card-body">
                     <h5>Membantu meningkatkan awarness terhadap sesama</h5>
                     <p className="card-text">
                        Sebagai organisasi kampanye yang independen, kami
                        mengajak dan membantu teman teman untuk bersama sama
                        mendukung setiap event dan kampanye yang ada..
                     </p>
                  </div>
               </div>
               <div className="card about-us-list" style={{ width: "18rem" }}>
                  <img
                     src="https://res.cloudinary.com/dk55ik2ah/image/upload/v1666364446/Customer_Service_Monochromatic_atbaq1.png"
                     className="card-img-top"
                     alt="..."
                  />
                  <div className="card-body">
                     <h5>Kami menjamin komunikasi antar sesama</h5>
                     <p className="card-text">
                        Kami mengutamakan komunikasi antar penggiat lingkungan,
                        aktivis, orang umum, serta kami sebagai perantara yang
                        menjamin kualitas komunikasinya.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default AboutUsHomepage;
