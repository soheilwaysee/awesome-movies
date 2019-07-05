import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const ScrollUpOnRouteChange = ({ location }) => {
  useEffect(() => {
    if (typeof window !== undefined) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
};

export default withRouter(ScrollUpOnRouteChange);
