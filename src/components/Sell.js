
import { useState } from "react";
import { storage, db } from "../fbConfig";

const Sell = () => {

    const [image, setImage] = useState(null);
    //const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState("");

    const handleChange = (e) => {
        if (e.target.files[0]) {
          setImage(e.target.files[0]);
        }
      };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // progress function ...
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          (error) => {
            // Error function ...
            console.log(error);
          },
          () => {
            // complete function ...
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then((url) => {
                //setUrl(url);
    
                // post image inside db
                db.collection("listings").add({
                  imageUrl: url,
                  caption: caption,
                  //timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                });
    
                setProgress(0);
                setCaption("");
                setImage(null);
              });
          }
        );
      };
    return (
        <div>
                  <progress className="imageupload__progress" value={progress} max="100" />
      <input
        placeholder="Enter a caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <div>
        <input type="file" onChange={handleChange} />
        <button className="imageupload__button" onClick={handleUpload}>
          Upload
        </button>
      </div>

      <br />
            
        </div>
    )
}

export default Sell
