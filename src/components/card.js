import React from "react";

export default function Card({ title, image, onToggleFocus }) {

  return (
    <div
      className="card-wrapper"
    >
      <div className="card">
        <figure className="card-image-container">
          <div className="card-image-wrapper">
            <img
              className="card-image"
              src={image}
              alt=""
              initial={{
                marginLeft: "0rem",
                marginRight: "0rem",
                marginTop: "0rem"
              }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </figure>
      </div>
    </div>
  );
}