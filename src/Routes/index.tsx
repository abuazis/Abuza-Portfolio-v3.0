import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Footer, Navbar, ScrollTop } from "../Components";
import { Detail, Home, Project } from "../Pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <ScrollTop>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/projects/:name" component={Detail} />
        </Switch>
        <Footer />
      </ScrollTop>
    </BrowserRouter>
  );
};

export default Routes;
