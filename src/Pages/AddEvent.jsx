import React from "react";

function AddEvent() {
   return (
      <div style={{ backgroundColor: "#eff7f2" }}>
         <div className="container-addevent">
            <div className="container ">
               <center>
                  <h1>Form Add Event</h1>
               </center>
               <form id="forme">
                  <div className="mb-3">
                     <label htmlFor="nama-event" className="form-label">
                        Nama Event
                     </label>
                     <input
                        required
                        type="text"
                        className="form-control"
                        id="nama-event"
                        placeholder="masukkan nama event"
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="gambar-event" className="form-label">
                        Gambar Event
                     </label>
                     <input
                        required
                        type="text"
                        className="form-control"
                        id="gambar-event"
                        placeholder="Masukan link gambar event"
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="organizer" className="form-label">
                        Organizer
                     </label>
                     <input
                        required
                        type="text"
                        className="form-control"
                        id="organizer"
                        placeholder="Masukkan nama organizer"
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="cp" className="form-label">
                        PIC
                     </label>
                     <input
                        required
                        type="text"
                        className="form-control"
                        id="pic"
                        placeholder="Masukkan nama pic acara"
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="cp" className="form-label">
                        CP PIC
                     </label>
                     <input
                        required
                        type="number"
                        className="form-control"
                        id="cp"
                        placeholder="Masukkan telp PIC"
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="status" className="form-label">
                        Status
                     </label>
                     <input
                        required
                        type="text"
                        className="form-control"
                        id="status"
                        placeholder="Masukkan status"
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="location-event" className="form-label">
                        Location Event
                     </label>
                     <input
                        required
                        type="text"
                        className="form-control"
                        id="location-event"
                        placeholder="Masukkan lokasi event"
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="tanggal">Waktu Pelakasanaan</label>
                     <input
                        required
                        type="date"
                        id="tanggal"
                        name="tanggal"
                        className="form-control"
                        placeholder="Masukkan waktu event"
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="max-person" className="form-label">
                        Max person
                     </label>
                     <input
                        required
                        type="number"
                        className="form-control"
                        id="max-person"
                        placeholder="Masukkan jumlah maksimal partisipant event"
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

export default AddEvent;
