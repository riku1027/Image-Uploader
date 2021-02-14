import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Upload, Uploading, Uploaded } from "./components/index";
import "./assets/styles/style.scss";

const App = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="wrap">
          <div className="inner">
            <Router>
              <Route exact path="/" component={Upload} />
              <Route path="/Uploading" component={Uploading} />
              <Route path="/Uploaded" component={Uploaded} />
            </Router>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
