import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallFilmCard from "../small-film-card/small-film-card";

// не предусмотрена кнопка Load More
const MAX_FILMS_QUANTITY = 8;

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films} = this.props;
    return (
      <div className="catalog__movies-list">
        {films
          .slice(0, MAX_FILMS_QUANTITY)
          .map((film) => {
            return <SmallFilmCard key = {film.id} preview = {film.preview} title = {film.title} id = {film.id} src = {film.video}/>;
          })}
      </div>
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }))
};

export default FilmsList;
