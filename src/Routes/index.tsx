import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Footer, Navbar } from "../Components";
import { Detail, Home, Project } from "../Pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/projects/:name" component={Detail} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
