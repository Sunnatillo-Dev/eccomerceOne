import { v4 } from "uuid";
import { storage } from "../firebase/clientapp";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [imgs, setImgs] = useState([]);
  let [is, setIs] = useState(false);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imgRefs = await listAll(ref(storage, "images"));
        const promises = imgRefs.items.map(async (val) => {
          const url = await getDownloadURL(val);
          return { url, path: val._location.path_ };
        });
        const results = await Promise.all(promises);
        setImgs(results.map((result) => result.url));
        console.log(image);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [is]);
  let handleUpload = () => {
    setIs(!is);
    let imageRef = ref(storage, `images/${v4().slice(0, 6)}${image?.name}`);
    uploadBytes(imageRef, image);
  };
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />
      <button onClick={() => handleUpload()}>Upload</button>

      {imgs.map((img, index) => (
        <div key={index}>
          {/* <Image width={"500px"} src={img} /> */}
          <video width={"500px"} height={"500px"} src={img} controls={true} />
        </div>
      ))}
    </div>
  );
};

export default ImageUpload;
