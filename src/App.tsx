import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Upload, Uploading, Uploaded } from "./components/index";
import "./assets/styles/style.scss";
import { storage } from "./firebase/index";

const App: React.FC = () => {
  const [image, setImage] = useState(null);

  const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const image = files[0];
      const storageRef = storage.ref();
      const imagesRef = storageRef.child("images");
      const targetRef = imagesRef.child(image.name);
      console.log(process.env.REACT_APP_API_KEY);
      await targetRef.put(image).then(function (snapshot) {
        console.log("アップロード完了");
      });
    }
  };

  return (
    <section className="main">
      <div className="container">
        <div className="wrap">
          <div className="inner">
            <Router>
              <Route exact path="/">
                <Upload uploadImage={uploadImage} />
              </Route>
              <Route path="/Uploading">
                <Uploading />
              </Route>
              <Route path="/Uploaded">
                <Uploaded />
              </Route>
            </Router>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
