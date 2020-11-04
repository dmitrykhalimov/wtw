import React from "react";
import PropTypes from "prop-types";
import Logo from "../logo/logo";
import FilmsCatalog from "../films-catalog/films-catalog";
import FilmsList from "../films-list/films-list";
import Footer from "../footer/footer";
import {validFilm} from "../../utils/props";
import {connect} from "react-redux";
import {getFilms, getRendered} from "../../store/reducers/selectors";
import UserBlock from "../user-block/user-block";

const MyList = (props) => {
  const {films, rendered} = props;
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo></Logo>

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock/>
      </header>

      <FilmsCatalog>
        <FilmsList
          films = {films}
          maxQuantity = {rendered}
        />
      </FilmsCatalog>

      <Footer
        isLight={true}
      />
    </div>
  );
};

MyList.propTypes = {
  films: PropTypes.arrayOf(validFilm).isRequired,
  rendered: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  // временное решение, когда будет нормальная реализация mylist - поправлю
  rendered: getRendered(state),
});

export default connect(mapStateToProps)(MyList);


