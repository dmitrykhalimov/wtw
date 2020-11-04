import React from "react";
import PropTypes from "prop-types";
import FormReview from "../form-review/form-review";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";

const AddReview = (props) => {
  const {onFormSubmit} = props;
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src="/img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="movie-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock/>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src="/img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <FormReview
        onFormSubmit = {onFormSubmit}
      />

    </section>
  );
};

AddReview.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default AddReview;
