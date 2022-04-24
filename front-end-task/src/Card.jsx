import React from "react";
import "./Card.css";
function Card(props) {
  console.log(props);
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="" className="card__img" />
          <div className="card__info">
            <h4 className="card__title">{props.title}</h4>
            <a href={props.link} target="_blank" rel="noreferrer">
              <button>Explore the site</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
