import actionTypes from "./actionTypes";

export const addToFavAction = (id, active) => ({
  type: actionTypes.ACCOUNT_FAVORITE,
  method: "post",
  url: "/account/{account_id}/favorite",
  data: {
    media_type: "movie",
    media_id: id,
    favorite: active
  }
});

export const addToWatchListAction = (id, active) => ({
  type: actionTypes.ACCOUNT_WATCHLIST,
  method: "post",
  url: "/account/{account_id}/watchlist",
  data: {
    media_type: "movie",
    media_id: id,
    watchlist: active
  }
});

export const getMovieApiAction = movieId => ({
  method: "get",
  type: actionTypes.GET_MOVIE,
  url: `/movie/${movieId}`
});

export const getMoviesApiActions = {
  now_playing: {
    type: actionTypes.GET_MOVIE_NOW_PLAYING,
    method: "get",
    url: "/movie/now_playing"
  },
  popular: {
    type: actionTypes.GET_MOVIE_POPULAR,
    method: "get",
    url: "/movie/popular"
  },
  top_rated: {
    type: actionTypes.GET_MOVIE_TOP_RATED,
    method: "get",
    url: "/movie/top_rated"
  },
  upcoming: {
    type: actionTypes.GET_MOVIE_UPCOMING,
    method: "get",
    url: "/movie/upcoming"
  },
  favorites: {
    type: actionTypes.GET_ACCOUNT_FAVORITE_MOVIES,
    method: "get",
    url: "/account/{account_id}/favorite/movies",
    params: {
      sort_by: "created_at.desc"
    }
  },
  watchlist: {
    type: actionTypes.GET_ACCOUNT_WATCHLIST_MOVIES,
    method: "get",
    url: "/account/{account_id}/watchlist/movies",
    params: {
      sort_by: "created_at.desc"
    }
  }
};

export const getTokenAction = {
  type: actionTypes.GET_AUTHENTICATION_TOKEN_NEW,
  method: "get",
  url: "/authentication/token/new"
};

export const getSearchData = ({ query } = {}) => ({
  type: actionTypes.GET_SEARCH_MOVIE,
  method: "get",
  url: "/search/movie",
  params: {
    query
  }
});

export const showToast = ({ message, error, success }) => ({
  type: actionTypes.SHOW_TOAST,
  error,
  success,
  message
});

export const hideToast = { type: actionTypes.HIDE_TOAST };

export const updateId = ({ id, active, typeName }) => ({
  type: actionTypes.UPDATE_ID,
  typeName,
  active,
  id
});
