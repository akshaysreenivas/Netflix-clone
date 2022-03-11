import React, { useEffect, useState } from "react";
import "./Rowpost.css";
import axios from "../../axios";
import {imageUrl } from "../constants/Constants";

function Rowpost(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(props.url)
      .then((Response) => {
        console.log(Response.data);
        setMovies(Response.data.results);
      })
      
  });
  return (
    <div className="Rowpost">
      <h2 className="movies-title" >{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            className= {   props.isSmall? "smallposter poster" : 'normalposter poster'}
            src={`${movies ? imageUrl + obj.backdrop_path : ""}`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}

export default Rowpost;
