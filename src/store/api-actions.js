import {loadFilms, requireAuthorization} from "./action";
import {filmsAdapter} from "../services/adapter";
import {AuthorizationStatus} from "../const";

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => filmsAdapter(data))
    .then((films) => dispatch(loadFilms(films)))
);

// задел на будущее

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);
