import React, { memo } from "react";
import Card from "./Card";
import getYear from "../utils/getYear";
import styles from "../styles/components/MovieDetails.module.css";
import MovieDetailsInfo from "./MovieDetailsInfo";
import MovieDetailsInfoArray from "./MovieDetailsInfoArray";
import uidHasChanged from "../utils/uidHasChanged";
import PropTypes from 'prop-types';
import moviePropTypes from '../propTypesCommon/moviePropTypes';

const MovieDetails = ({
  data: {
    poster_path,
    title = "",
    release_date,
    vote_average,
    id,
    genres = [],
    overview,
    production_companies = [],
    spoken_languages = [],
    status,
    tagline,
    budget,
    production_countries = [],
    belongs_to_collection = {},
    adult
  } = {},
  isFavorited,
  isWatchListed
}) => {
  return (
    <div className={styles.wrapper}>
      <div>
        {title && <h1 className={styles.title}>{title}</h1>}
        {release_date && (
          <h4 className={styles.year}>{getYear(release_date)}</h4>
        )}
        <MovieDetailsInfoArray info={genres} wrapperClassName="center-align" title="Genres" />
        <Card
          isFavorited={isFavorited}
          isWatchListed={isWatchListed}
          item={{
            poster_path,
            title,
            release_date,
            vote_average,
            id,
            genres,
            overview
          }}
          className={styles.card}
        />
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <MovieDetailsInfo info={overview} title="Overview" />
            <div className={styles.descriptionWrapper}>
              <MovieDetailsInfoArray
                info={production_companies}
                title="Production Companies"
              />
              <MovieDetailsInfoArray
                info={spoken_languages}
                title="Spoken Languages"
              />
              <MovieDetailsInfoArray
                info={production_countries}
                title="Production Countries"
              />
              <MovieDetailsInfo info={status} title="Status" />
              <MovieDetailsInfo info={tagline} title="Tagline" />
              <MovieDetailsInfo info={budget} title="Budget" />
              <MovieDetailsInfo
                info={belongs_to_collection && belongs_to_collection.name}
                title="Belongs To Collection"
              />
              <h4 className={styles.descriptionTitle}>Adult</h4>
              <span>{adult ? "Yes" : "No"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  data: moviePropTypes,
  isFavorited: PropTypes.bool,
  isWatchListed:  PropTypes.bool
}

export default memo(MovieDetails, uidHasChanged);
