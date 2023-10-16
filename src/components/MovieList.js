import React from "react";
import ButtonLike from "./ButtonLike";
import ButtonDislike from "./ButtonDislike";
import TitleBanner from "./TitleBanner";

const MovieList = ({ movies, handleLike, handleDislike }) => {
  const titleStyle = {
    fontFamily: "Arial, sans-serif",
    fontSize: "24px",
    fontWeight: "bold",
  };
  const imageStyle = {
    maxWidth: "200px",
    maxHeight: "300px",
  };

  return (
    <div>
      <TitleBanner />
      {movies.map((movie, index) => (
        <div key={index}>
          <h3 style={titleStyle}>{movie.title}</h3>
          <img src={movie.image} alt={movie.title} style={imageStyle} />
          <p>Director: {movie.director}</p>
          <p>Likes: {movie.likes}</p>
          <p>Dislikes: {movie.dislikes}</p>
          <ButtonLike onClick={() => handleLike(index)}></ButtonLike>
          <ButtonDislike onClick={() => handleDislike(index)}></ButtonDislike>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
