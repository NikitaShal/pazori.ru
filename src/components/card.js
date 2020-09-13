import React from "react";
import Img from 'gatsby-image';

export default function Card({ title, image }) {

  return (
    <div className="card-wrapper">
      <div className="card">
        <figure className="card-image-container">
          <div className="card-image-wrapper">
            <Img
              className="card-image"
              fluid={image}
              alt=""
              loading="eager"
              fadeIn="true"
            />
          </div>
        </figure>
      </div>
    </div>
  );
}