import React from "react";
import "../assets/styles/uploaded.scss";
import SuccessIcon from "../assets/images/success-icon.svg";

type Props = {
  image: string | undefined;
};

const Uploaded: React.FC<Props> = ({ image }) => {
  const copyToClipboard = (): void => {
    const el: any = document.createElement("textarea");
    el.value = image;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("コピーしました。");
  };
  return (
    <div>
      <div className="heading">
        <img src={SuccessIcon} alt="" className="heading__icon" />
        <div className="heading__text">Uploaded Scucessfully!</div>
      </div>
      <div className="image">
        <img src={image} alt="" className="image__view" />
        <div className="image__url">
          <p className="image__url__text">{image}</p>
          <button className="image__url__button" onClick={copyToClipboard}>
            Copy link
          </button>
        </div>
      </div>
    </div>
  );
};

export default Uploaded;
