import React from "react";

function ContentAboutus() {
   return (
      <div>
         <div className="container">
            <div className="teksAboutus-1">
               <h1>About Us</h1>
               <p>
                  Greenish hadir karena bumi yang rapuh ini perlu suara. Butuh
                  solusi. Butuh perubahan. Butuh aksi. Greenish memiliki
                  landasan prinsip dan nilai-nilai dasar yang tercermin dalam
                  setiap aksi kampanye lingkungan kami..
               </p>
            </div>
         </div>
         <div className="container">
            <div
               className="card mb-12 content-about-us"
               style={{ maxWidth: "max-content" }}
            >
               <div className="row g-0">
                  <div className="col-md-6">
                     <img
                        src="https://res.cloudinary.com/dk55ik2ah/image/upload/v1669427843/Premium_Vector_Nature_family_environmental_protection_landscaping_concept__weg8sn.jpg"
                        className="img-fluid rounded-start"
                        alt="..."
                     />
                  </div>
                  <div className="col-md-6 bg-img">
                     <div className="card-body content-teks teks3">
                        <h5 className="card-title">
                           Kami berusaha menjaga alam
                        </h5>
                        <p className="card-text align-middle">
                           Sebagai upaya menjaga kelestarian hutan, kami
                           melakukan kegiatan menanam sejuta pohon, tidak
                           membuka lahan dengan membakar hutan, tidak melakukan
                           penebangan pohon secara liar, melaporkan pada pihak
                           berwajib jika mengetahui adanya praktik illegal
                           logging dan melakukan sosialisasi tentang bahayanya
                           jika tidak menjaga alam sekitar seperti bisa terkena
                           bencana alam banjir, longsor dan pemanasan global
                           (global warming).
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            <div
               className="card mb-12 content-about-us"
               style={{ maxWidth: "max-content" }}
            >
               <div className="row g-0">
                  <div className="col-md-6 bg-img">
                     <div className="card-body content-teks teks3">
                        <h5 className="card-title">
                           Kami mengkampanyekan kurangi penggunaan plastik
                        </h5>
                           <p className="card-text text-content align-middle ">
                              Sebagai upaya mengurangi penggunaan plastik, kami
                              melakukan sosialisasi untuk setiap berpergian
                              selalu membawa tas kain, ketika terlanjur membeli
                              kantong plastik, setiap selesai digunakan bisa
                              disimpan dan digunakan lagi,hindari untuk membeli
                              makanan dan minumanan dengan membungkus, selain
                              melakukan sosialisasi, kami juga melakukan
                              kegiatan daur ulang sampah sampah plastik menjadi
                              pot tanaman, dan melakukan pengambilan sampah
                              sampah yang berserakan di sungai dan pinggir
                              jalan.
                           </p>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <img
                        src="https://res.cloudinary.com/dk55ik2ah/image/upload/v1669426267/Zero_waste_concept_tiny_people_lyqobx.jpg"
                        className="img-fluid rounded-start"
                        alt="..."
                     />
                  </div>
               </div>
            </div>

            <div
               className="card mb-12 content-about-us"
               style={{ maxWidth: "max-content" }}
            >
               <div className="row g-0">
                  <div className="col-md-6">
                     <img
                        src="https://res.cloudinary.com/dk55ik2ah/image/upload/v1669428789/Free_Vector_Humanitarian_help_people_donating_sanitary_protection_equipment_concept_illustration_zkztck.jpg"
                        className="img-fluid rounded-start"
                        alt="..."
                     />
                  </div>
                  <div className="col-md-6 bg-img">
                     <div className="card-body content-teks teks3">
                        <h5 className="card-title">
                           Kami berusaha membantu sesama ketika mendapat musibah
                        </h5>
                        <p className="card-text align-middle text-content">
                           Sebagai upaya membantu sesama yang sedang terkena
                           musibah, kami melakukan event untuk mendapatkan
                           relawan yang siap dikirim ke tempat yang terkena
                           dampak musibah, lalu kami melakukan evakuasi kepada
                           sesama yang sedang terkena dampak musibah ke tempat
                           pengungsian dan membagikan perlengkapan atau
                           kebutuhan yang dibutuhkan oleh sesama yang sedang
                           terkena musibah
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="video-about-us">
            <center>
               <iframe
                  className="video-greenish"
                  width="700"
                  height="450"
                  src="https://www.youtube.com/embed/bFg2iDSjuO4"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
               ></iframe>
            </center>
         </div>
      </div>
   );
}

export default ContentAboutus;
