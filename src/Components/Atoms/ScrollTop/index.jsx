import { ComponentType, useEffect } from "react";
import { RouteComponentProps, useLocation, withRouter } from "react-router-dom";

const ScrollTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

export default withRouter(ScrollTop);