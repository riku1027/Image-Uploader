import React from "react";
import "../assets/styles/uploading.scss";

const Uploading: React.FC = () => {
  return (
    <div>
      <p className="text">Uploading...</p>
      <div className="progress">
        <span className="progress__indicator"></span>
      </div>
    </div>
  );
};

export default Uploading;
