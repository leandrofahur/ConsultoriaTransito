import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "../pages/Homepage";
import About from "../pages/About";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/sobre" component={About} />
      {/* <Route to="/servicos" component={Work} /> */}
      {/* <Route to="/blog" component={Blog} /> */}
      {/* <Route to="/contato" component={Contact} /> */}
    </Switch>
  );
};

export default Routes;
