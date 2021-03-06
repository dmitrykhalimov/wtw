import React from "react";
import Review from "../review/review";
import ReviewColumn from "../review-column/review-column";
import {validComments} from "../../utils/props";

const FilmReviews = (props) => {

  const MAX_COMMENTS = 6;
  const {comments} = props;
  const commentsToRender = comments.slice(0, MAX_COMMENTS);
  const halfLength = Math.ceil(commentsToRender.length / 2);


  const makeCommentColumn = (firstComment, lastComment) => {
    const resultArray = commentsToRender
      .slice(firstComment, lastComment)
      .map((item, index) => {
        return <Review
          key={item.id + index}
          comment={item}
        />;

      });
    return (
      <ReviewColumn>
        {resultArray}
      </ReviewColumn>
    );
  };

  return (
    <div className="movie-card__reviews movie-card__row">
      {makeCommentColumn(0, halfLength)}
      {makeCommentColumn(halfLength, commentsToRender.length)}
    </div>
  );
};

FilmReviews.propTypes = {
  comments: validComments,
};


export default FilmReviews;


