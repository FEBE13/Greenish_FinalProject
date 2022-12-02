import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvent } from "../Redux/Action/EventAction";
import { useNavigate } from "react-router-dom";
function EventHomePage() {
   const nav = useNavigate();
   const dispatch = useDispatch();
   const data = useSelector((state) => state.Event);
   const item = data.events;
   console.log("ini dari event home page", item);

   useEffect(() => {
      dispatch(getEvent());
   }, []);
   return (
      <div className="container event-homepage">
         <h1>Event Terbaru</h1>
         <div className="row">
            {item.slice(0, 3).map((item, index) => {
               return (
                  <div
                     onClick={() => {
                        nav(`/event/${item._id}`);
                     }}
                     key={item._id}
                     className="col-lg-4  col-xs-12 card text-white card-event-homepage"
                  >
                     <img
                     style={{height: "300px"}}
                        className="img-event-homepage"
                        src={item.poster}
                        alt=""
                     />
                     <div className="text-event-homepage card-img-overlay">
                        <h4>{item.name}</h4>
                        <p>{item.desc ? item.desc.slice(0, 100) : ""}</p>
                     </div>
                  </div>
               );
            })}
         </div>
         <button
            onClick={() => nav("/event")}
            className="btn-informasiall-homepage"
         >
            Lihat Semua
         </button>
      </div>
   );
}

export default EventHomePage;
