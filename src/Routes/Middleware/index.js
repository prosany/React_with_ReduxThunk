import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({
  component: Component,
  isProtected,
  layout: Layout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isProtected && localStorage.getItem("accessToken")) {
          return (
            <Layout>
              <Component {...props} />
            </Layout>
          );
        }
        return (
          <Layout>
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          </Layout>
        );
      }}
    />
  );
};
