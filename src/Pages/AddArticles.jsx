import React from "react";

function AddArticles() {
   return (
      <div style={{ backgroundColor: "#eff7f2" }}>
         <div className="container-addevent">
            <div className="container ">
               <center>
                  <h1>Form Add Articles</h1>
               </center>
               <form id="forme">
                  <div className="mb-3">
                     <label htmlFor="nama-artikel" className="form-label">
                        Nama Artikel
                     </label>
                     <input
                        required
                        type="text"
                        className="form-control"
                        id="nama-artikel"
                        placeholder="masukkan nama artikel"
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="gambar-artikel" className="form-label">
                        Gambar Artikel
                     </label>
                     <input
                        required
                        type="text"
                        className="form-control"
                        id="gambar-artikel"
                        placeholder="Masukan link gambar artikel"
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="author" className="form-label">
                        Nama Author
                     </label>
                     <input
                        required
                        type="text"
                        className="form-control"
                        id="author"
                        placeholder="Masukkan nama author"
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="tanggal">Waktu artikel</label>
                     <input
                        required
                        type="date"
                        id="tanggal"
                        name="tanggal"
                        className="form-control"
                        placeholder="Masukkan waktu artikel"
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="likes" className="form-label">
                        likes
                     </label>
                     <input
                        required
                        type="number"
                        className="form-control"
                        id="likes"
                        placeholder="likes"
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="desc-event" className="form-label">
                        Description Event
                     </label>
                     <textarea
                        required
                        className="form-control"
                        id="desc-event"
                        rows="3"
                     ></textarea>
                  </div>
                  <center>
                     <button type="submit" className="btn btn-primary">
                        Submit
                     </button>
                  </center>
               </form>
            </div>
         </div>
      </div>
   );
}

export default AddArticles;
