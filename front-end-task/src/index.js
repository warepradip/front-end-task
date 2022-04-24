import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Card from "./Card";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <div className="card__row">
      <Card
        imgsrc="images/maxresdefault.jpg"
        title="Meta Trap house"
        link="https://oncyber.io/crypto-trap-house"
      />
      <Card
        imgsrc="images/3d2c6b14c75bb8069ae98c1c85603359.jpg"
        title="The Vincent Van Dough Gallery"
        link="https://oncyber.io/vvd"
      />
      <Card
        imgsrc="images/zcfmVkouEitYhO2m.jpg"
        title="Teufzer"
        link="https://oncyber.io/teufeurs"
      />
    </div>
    <div className="card__row">
      <Card
        imgsrc="images/1*0G0Ky5aE9X97Ebl_ExqzJA.jpeg"
        title="6529AB+1"
        link="https://oncyber.io/6529ab"
      />
      <Card
        imgsrc="images/Traders-Are-Buying-Their-Own-NFTs-to-Drive-Up-Prices-Report.jpg"
        title="#9049"
        link="https://oncyber.io/bitrox"
      />
      <Card
        imgsrc="images/cbe346eee79d3e08dee5e8eb04284438.webp"
        title="6529 Photo A"
        link="https://oncyber.io/6529photo"
      />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
