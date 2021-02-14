import React from "react";
import "../assets/styles/upload.scss";
import UploadImage from "../assets/images/upload.svg";
import { useHistory } from "react-router-dom";

const Upload: React.FC = () => {
  const history = useHistory();
  const handleChange = () => {
    history.push("/Uploading");
  };

  return (
    <div>
      <p className="heading">Upload your image</p>
      <p className="note">File should be Jpeg, Png,...</p>

      <div className="upload__area">
        <img src={UploadImage} alt="" />

        <p className="upload__text">Drag & Drop your image here</p>
      </div>

      <p className="note__or">Or</p>

      <label className="label__button">
        Choose a file
        <input
          id="choose_input"
          className="upload__input--button"
          accept="image/jpeg, image/png"
          type="file"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Upload;
