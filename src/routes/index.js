import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Work from "../pages/Work";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/sobre" component={About} />
      <Route path="/servicos" component={Work} />
      <Route path="/blog" component={Blog} />
      <Route path="/contato" component={Contact} />
    </Switch>
  );
};

export default Routes;
