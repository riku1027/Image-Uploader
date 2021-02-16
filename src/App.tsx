import React, { useState } from "react";
import { Upload, Uploading, Uploaded } from "./components/index";
import "./assets/styles/style.scss";
import { storage } from "./firebase/index";

const App: React.FC = () => {
  type imageStateType = "Upload" | "Uploading" | "Uploaded";

  const [imageState, setImageState] = useState<imageStateType>("Upload");
  const [imageUri, setImageUri] = useState<string>();

  const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageState("Uploading");
    const files = event.target.files;
    if (files) {
      const uploadFile = files[0];
      const targetRef = storage.ref().child(`images/${uploadFile.name}`);

      const uploadTask: any = targetRef.put(uploadFile);

      uploadTask.on(
        "state_changed",
        (snapshot: { bytesTransferred: number; totalBytes: number }) => {
          // 進行中のsnapshotを得る
          // アップロードの進行度を表示
          const percent =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(percent + "% done");
          console.log(snapshot);
        },
        (error: any) => {
          console.log("err", error);
          alert(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL: any) => {
            console.log("File available at", downloadURL);
            setImageUri(downloadURL);
            setImageState("Uploaded");
            console.log(imageUri);
          });
        }
      );
    }
  };

  return (
    <section className="main">
      <div className="container">
        <div className="wrap">
          <div className="inner">
            {(() => {
              if (imageState == "Upload") {
                return <Upload uploadImage={uploadImage} />;
              } else if (imageState == "Uploading") {
                return <Uploading />;
              } else if (imageState == "Uploaded") {
                return <Uploaded image={imageUri} />;
                // propsとしてImageStateを渡す。
              }
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
