import React, { useState } from "react";
import img from "../images/mainImg.jpeg";
import ImageIcon from "@mui/icons-material/Image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import Modal from "./Modal";
import Sample from "./Circle";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [toggle, setToggle] = useState(false);
  const mainPhoto = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "100%",
    transform: "translate(-50%, -50%)",
  };
  const centerDiv = {
    width: "20vw",
    height: "35vh",
    background: "white",
    float: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: "1000",
    textAlign: "center",
    transform: "translate(-50%, -50%)",
    boxShadow: "2px 2px 8px #000000",
  };

  const buttons = {
    borderRadius: "15px",
    background: "#047782",
    width: "10vw",
    height: "5vh",
    marginTop: "10px",
    display: "flex",
    justifyContent: "flex-start",
    cursor: "pointer",
  };

  const label = {
    textAlign: "center",
    color: "white",
    marginTop: "1%",
    cursor: "pointer",
  };

  const fonts = {
    color: "white",
    margin: "5 10 0 10",
    fontSize: "large",
  };

  return (
    <div className="myphotos">
      <div style={centerDiv}>
        <div style={{ marginTop: "15%" }}>
          <label style={{ fontWeight: "500" }}>POC Header</label>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={buttons} onClick={() => setToggle((prev) => !prev)}>
            <ImageIcon style={fonts} />
            <label style={label}>Menu 1 </label>
          </div>
            <Link to={'/Circles'} style={{...buttons, textDecoration : 'none'}}>
              <MeetingRoomOutlinedIcon style={fonts} />
              <label style={label}>Circles </label>
            </Link>
          <div style={buttons}>
            <FavoriteBorderIcon style={fonts} />{" "}
            <label style={label}>Menu 3 </label>
          </div>
        </div>
      </div>
      <img src={img} style={{ ...mainPhoto }}></img>
      {toggle ? (
        <Modal toggle={toggle} setToggle={() => setToggle((prev) => !prev)} />
      ) : null}
    </div>
  );
};

export default Homepage;
