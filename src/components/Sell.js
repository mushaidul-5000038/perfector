import '../styles/Sell.css'
import { useState } from "react";
import { storage, db } from "../fbConfig";

const Sell = () => {

  const [name, setName] = useState("");
  const [Owneraddress, setOwnerAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [nid, setNid] = useState("");
  const [title, setTitle] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [room, setRoom] = useState("");
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState('');
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState(null);
  //const [url, setUrl] = useState("");


  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (name && Owneraddress && phone && nid && title && propertyAddress && room && size && description && price && category && image) {
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
                name: name,
                Owneraddress: Owneraddress,
                phone: phone,
                nid: nid,
                title: title,
                propertyAddress: propertyAddress,
                room: room,
                size: size,
                price: price,
                category: category,
                imageUrl: url,
                description: description,
                //timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              });

              setProgress(0);
              setDescription("");
              setImage(null);
            });
        }
      );
    }
    else {
      alert("Please fill all the details")
    }
  };
  return (
    <div className='sell'>

      <div className="sell__form">
        <div className="sell__PropertyDetails">
          <h1>Owner's Info</h1>
          <hr />
          <input type="text" placeholder='Name' required value={name}
            onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder='Address' value={Owneraddress}
            onChange={(e) => setOwnerAddress(e.target.value)} />
          <div className='sell__inputsOneRow'>
            <input type="text" placeholder='Phone no.' className='restrict_width' value={phone}
              onChange={(e) => setPhone(e.target.value)} />
            <input type="number" placeholder='Identification no.' className='restrict_width' value={nid}
              onChange={(e) => setNid(e.target.value)} />

          </div>



        </div>


        <div className='sell__PropertyDetails'>
          <h1>Property Info</h1>
          <hr />
          <input type="text" placeholder='Title of the house' value={title}
            onChange={(e) => setTitle(e.target.value)} />
          <input type="text" placeholder='Address' value={propertyAddress}
            onChange={(e) => setPropertyAddress(e.target.value)} />
          <div className='sell__inputsOneRow'>
            <input type="number" placeholder='Number of rooms' className='restrict_width' value={room}
              onChange={(e) => setRoom(e.target.value)} />
            <input type="number" placeholder='Size in sqft' className='restrict_width' value={size}
              onChange={(e) => setSize(e.target.value)} />

          </div>



          <input
            placeholder="Enter a short description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className='sell__inputsOneRow '>
            <input type="number" placeholder='Price' className='restrict_width'
              value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="text" placeholder='Category' className='restrict_width'
              value={category} onChange={(e) => setCategory(e.target.value)} />
          </div>


          <div className='sell__imageUpload'>
            <h3>Upload an image of your property</h3>
            <progress className="sell__progress" value={progress} max="100" />
            <input type="file" onChange={handleChange} />

          </div>
          <a href onClick={handleUpload}>
            <button class="bn54">
              <span class="bn54span">Submit</span>
            </button>
          </a>

        </div>



      </div>



    </div>
  )
}

export default Sell
