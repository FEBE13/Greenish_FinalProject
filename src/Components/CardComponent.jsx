import React from "react";
import { Card } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../Redux/Action/EventAction";
import { useNavigate } from "react-router-dom";


function CardComponent() {
  const nav = useNavigate()
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Event);
  const item = data.events;
  // item.map((item)=>{
  //   const date = new Date (item.date)
  //   date.getYear()
  //   console.log(date)
  // })

  useEffect(() => {
    dispatch(getUser());
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
            <Card.Body style={{ padding: "15px", lineHeight: "20px" }}>
              <p style={{ fontWeight: "600", fontSize: "18px" }}>
                {item.name}
              </p>
              <p style={{ fontWeight: "300", fontSize: "15px" }}>
                {item.place}
              </p>
              <p style={{ fontWeight: "300", fontSize: "15px" }}>21 Des 2022</p>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default CardComponent;
