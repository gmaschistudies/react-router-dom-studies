import React, { FunctionComponent as FC, ReactElement as RE } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import {
  AboutUs,
  Blog,
  BlogDetails,
  Contacts,
  Home,
} from "../../presentation/pages";

const Routes: FC = (): RE => {
  const location = useLocation();
  return (
    <Switch location={location}>
      <Route path="/" exact component={Home} />
      <Route path="/about-us" exact component={AboutUs} />
      <Route path="/contacts" exact component={Contacts} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/blog/:articleId" exact component={BlogDetails} />
      {/* <Redirect to="/" /> */}
    </Switch>
  );
};

export default Routes;
