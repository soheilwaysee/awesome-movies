import React from 'react';
import SideBar from '../components/SideBar';
import MovieListPage from './MovieListPage';
import MovieDetailsPage from './MovieDetailsPage';
import { Route } from 'react-router-dom';
import styles from '../styles/pages/RouteMain.module.css';
import NotFound from './NotFound';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import movieListRoutes from '../utils/movieListRoutes';

const RouteMain = ({ showSideBar, setShowSideBar }) => (
  <div className={styles.wrapper}>
    <SideBar show={showSideBar} setShowSideBar={setShowSideBar} />
    <div
      className={[styles.routeWrapper, !showSideBar && styles.hide].join(' ')}
    >
      <Switch>
        <Route path={movieListRoutes} exact component={MovieListPage} />
        <Route path="/details/:id" component={MovieDetailsPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
);

RouteMain.propTypes = {
  showSideBar: PropTypes.bool,
  setShowSideBar: PropTypes.func
};

export default RouteMain;
