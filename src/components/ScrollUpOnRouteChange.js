import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import routerPropTypes from '../propTypesCommon/routerPropTypes';

const ScrollUpOnRouteChange = ({ location }) => {
  useEffect(() => {
    if (typeof window !== undefined) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
};

ScrollUpOnRouteChange.propTypes = {
  location: routerPropTypes.location
};

export default withRouter(ScrollUpOnRouteChange);
