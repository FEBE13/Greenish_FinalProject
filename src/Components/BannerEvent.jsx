import React, { useState } from "react";
import { Container, Form, FormControl, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SearchEvent } from "../Redux/Action/EventAction";

function BannerEvent() {
  const [value,setValue] = useState("")
  const dispatch = useDispatch()

  function handlerSearch(e) {
    e.preventDefault()
    dispatch(SearchEvent(value))
    setValue("")

  }
  return (
    <div>
      <div
        className="banner"
        style={{ width: "100%", height: "37rem", position: "relative" }}
      >
        <div style={{width: "100%", height: "37rem", position: "absolute",backgroundColor:'#4a4d4b',zIndex:'1',opacity:'0.2'}}></div>
        <img
          src="https://images.unsplash.com/photo-1602500922233-0742bb44b130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt=""
        />
        <Container
          style={{
            zIndex:'10',
            height:'fit-content',
            position: "absolute",
            marginTop: "20px",
            maxWidth: "700px",
            padding: "15px",
            top:0,
            left:'0',
            right:'0',
            bottom:0,
            margin:'auto'
          }}
        >
          <h2
            style={{
              color: "#ffffff",
              textAlign: "center",
              width: "100%",
              fontWeight: "700",
              marginBottom: "25px",
              wordSpacing:'2px'
            }}
          >
            Ayo gabung event yang cocok denganmu !
          </h2>
          <Form onSubmit={handlerSearch}>
            <InputGroup>
              <FormControl
                value={value}
                onChange={(e)=>{setValue(e.target.value)}}
                placeholder="Bakau"
                size="lg"
                style={{
                  borderRadius: "50px",
                  padding: "10px 20px",
                }}
              />
            </InputGroup>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default BannerEvent;
