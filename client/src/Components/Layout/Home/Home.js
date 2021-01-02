import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div data-test="homeComponent">
      <div className="container text-center">
        <h1 data-test="homeComponent-title" className=" mb-4 font-weight-bold">
          Echo Chamber
        </h1>
        <p className="lead">Follow down the rabbit hole.</p>
        <Link className="btn btn-primary font-weight-bold" to="/login">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Home;
