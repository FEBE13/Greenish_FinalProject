import React from "react";
import { Card } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvent } from "../Redux/Action/EventAction";
import { useNavigate } from "react-router-dom";


function CardComponent() {
  const nav = useNavigate()
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Event);
  const item = data.events;
  
  useEffect(() => {
    dispatch(getEvent());
  }, []);

  return (
    <div
      style={{
        width: "100%",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {item.map((item,index) => {
        const date = new Date(item.date).getDate();
        const year = new Date(item.date).getFullYear();
        const month = new Date(item.date).toLocaleString(
           "id",
           {
              month: "long",
           }
        );
        const datee = `${date} ${month} ${year}`
        return (
          <Card
            onClick={()=>{nav(`/event/${item._id}`)}}
            key={item._id}
            className="carde"
            style={{
              margin: "10px",
              maxHeight: "370px",
              maxWidth: "300px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Card.Img
              style={{ objectFit: "cover",height:'200px'}}
              variant="top"
              src={item.poster}
            />
            <Card.Body style={{ padding: "10px" }}>
              <p style={{ fontWeight: "600", fontSize: "18px"}}>
              {item.name ? item.name.slice(0,100) : ''}
              </p>  
              <p style={{ fontWeight: "400", fontSize: "15px" }}>
                {item.place}
              </p>
              <p style={{ fontWeight: "300", fontSize: "15px" }}>{datee}</p>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default CardComponent;
