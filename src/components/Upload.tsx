import React from "react";
import "../assets/styles/upload.scss";
import UploadImage from "../assets/images/upload.svg";
import { useHistory } from "react-router-dom";

type Props = {
  uploadImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Upload: React.FC<Props> = ({ uploadImage }) => {
  const history = useHistory();

  const onClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    history.push("/Uploading");
    uploadImage(event);
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
          onChange={onClick}
        />
      </label>
    </div>
  );
};

export default Upload;
