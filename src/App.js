import React, { useState } from "react";
import MovieList from "./components/MovieList";
import inceptionImage from "./images/inception.jpg";
import interstellarImage from "./images/interstellar.jpg";
import theshawshankredemptionImage from "./images/the shawshank redemtion.jpg";
import thegodfatherImage from "./images/the godfather.jpg";
import ButtonFinish from "./components/ButtonFinish";

const MovieApp = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      director: "Christopher Nolan",
      likes: 0,
      dislikes: 0,
      image: inceptionImage,
    },
    {
      title: "Interstellar",
      director: "Christopher Nolan",
      likes: 0,
      dislikes: 0,
      image: interstellarImage,
    },
    {
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      likes: 0,
      dislikes: 0,
      image: theshawshankredemptionImage,
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      likes: 0,
      dislikes: 0,
      image: thegodfatherImage,
    },
  ]);

  const [userProfile, setUserProfile] = useState({
    likedMovies: [],
    dislikedMovies: [],
  });

  const handleLike = (index) => {
    const updatedMovies = [...movies];
    updatedMovies[index].likes += 1;
    setMovies(updatedMovies);

    const updatedLikedMovies = [...userProfile.likedMovies, movies[index]];
    setUserProfile({ ...userProfile, likedMovies: updatedLikedMovies });
  };

  const handleDislike = (index) => {
    const updatedMovies = [...movies];
    updatedMovies[index].dislikes += 1;
    setMovies(updatedMovies);

    const updatedDislikedMovies = [
      ...userProfile.dislikedMovies,
      movies[index],
    ];
    setUserProfile({ ...userProfile, dislikedMovies: updatedDislikedMovies });
  };

  return (
    <div>
      <MovieList
        movies={movies}
        handleLike={handleLike}
        handleDislike={handleDislike}
      />
      <h2>Vote Results:</h2>
      <div>
        <h3>Total Movies Liked: {userProfile.likedMovies.length}</h3>
      </div>
      <div>
        <h3>Total Total Movies Disliked: {userProfile.dislikedMovies.length}</h3>
      </div>
      <ButtonFinish></ButtonFinish>
    </div>
  );
};

export default MovieApp;
