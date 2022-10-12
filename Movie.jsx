import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  const movie = movie.find((movie) => +movie.id == +id);

  return (
    <div className="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={movie.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{movie.title}</h2>
                <div className="book__selected--price"></div>
                <div className="book__summary">
                  <h2 className="book__summary--title">Summary</h2>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia!
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recomended Movies</h2>
            </div>
            <div className="books">
              {movie
                .filter((movie) => movie.rating === 5 && +movie.id !== +id)
                .slice(0, 4)
                .map((movie) => (
                  <Movie movie={movie} key={movie.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Movie;
