import React, { useEffect, useState } from "react";
import axios from '../../axios'
import {API_KEY,imageUrl} from '../constants/Constants'
import "./Banner.css";

function Banner(props) {
  const [movie, setMovie] = useState()
  useEffect(() => {
   axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
     console.log(Response.data.results[0])
setMovie(Response.data.results[1])
   })
  }, [])
  
  return (
    <div style={{background: `url(${movie? imageUrl+movie.backdrop_path :""}) center center/cover no-repeat` }} className="banner">
      <div className="content">
        <h1 className="title">{movie? movie.title :""}</h1>
        <div className="Banner_buttons">
          <button className="button"><i class="fa-solid fa-play"></i> Play</button>
          <button className="button"><b>+</b> My List</button>
        </div>
        <div className="description">
            <h1>Watch Now</h1>
         <p>{movie? movie.overview :""}</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
