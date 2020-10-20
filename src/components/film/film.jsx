import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {validFilm, validReview} from "../../utils/props";
import Tabs from "../tabs/tabs";
import withActiveTab from "../../hocs/with-active-tab/with-active-tab";
import FilmsList from "../films-list/films-list";

const MAX_FILMS_QUANTITY = 4;
const TabsWrapped = withActiveTab(Tabs);

class Film extends PureComponent {
  constructor(props) {
    super(props);

    this.films = this.props.films;
  }

  filterFilms(film) {
    return this.films.filter((item) => {
      return item.genre === film.genre;
    });
  }

  render() {
    const {film, review, onPlayClick} = this.props;
    // очень некрасиво смотрится film, films - когда нормальную перелинковку сделаю, это уберу
    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={film.background} alt={film.title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <a href="/" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>

              <div className="user-block">
                <div className="user-block__avatar">
                  <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </div>
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{film.title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{film.genre}</span>
                  <span className="movie-card__year">{film.year}</span>
                </p>

                <div className="movie-card__buttons">
                  <button
                    className="btn btn--play movie-card__button"
                    type="button"
                    onClick={(evt) => {
                      evt.preventDefault();
                      onPlayClick(film.id);
                    }}
                  >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                  <Link className="btn movie-card__button" to={`${film.id}/review`}>Add review</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <TabsWrapped
              film = {film}
              review = {review}
            />
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <FilmsList
              films = {this.filterFilms(film)}
              maxQuantity = {MAX_FILMS_QUANTITY}
            />
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}
Film.propTypes = {
  film: validFilm,
  review: validReview,
  onPlayClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(validFilm).isRequired,
};

export default Film;


