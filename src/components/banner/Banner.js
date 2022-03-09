import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">Movie Name</h1>
        <div className="Banner_buttons">
          <button className="button"><i class="fa-solid fa-play"></i> Play</button>
          <button className="button"><b>+</b> My List</button>
        </div>
        <div className="description">
            <h1>watch now</h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, incidunt? Deserunt repellendus officia molestias, animi, quaerat distinctio consequuntur impedit tempore voluptatum, ad vel quos adipisci! Autem excepturi vero animi minus.
        </div>
      </div>
    </div>
  );
}

export default Banner;
