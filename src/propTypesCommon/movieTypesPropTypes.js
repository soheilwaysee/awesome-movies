import PropTypes from 'prop-types';

const movieTypesPropTypes = PropTypes.oneOf([
  'now_playing',
  'popular',
  'top_rated',
  'upcoming',
  'favorites',
  'watchlist'
]);

export default movieTypesPropTypes;
