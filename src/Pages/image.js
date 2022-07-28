import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import Header from "./header";
const ImageComponent = () => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    axios.get("https://api.preciouscollege.edu.np/news-event/gallery").then((response) => {
      setImageList(response.data);
    });
  }, []);

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    console.log(imgSrc);
    setTempImgSrc(`https://api.preciouscollege.edu.np` + imgSrc);
    setModel(true);
  };

  return (
    <div style={{marginBottom:"3rem"}}>
        <Header />
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} />{" "}
        <AiOutlineClose onClick={() => setModel(false)} />{" "}
      </div>{" "}
      <div className="gallery">
        {" "}
        {imageList.map((item, index) => (
          <div
            className="pictures"
            key={index}
            onClick={() => getImg(item.image)}
          >
            <img
              src={`https://api.preciouscollege.edu.np${item.image}`}
              style={{ width: "100%" }}
            />{" "}
          </div>
        ))}{" "}
      </div>{" "}
    
    </div>
  );
};

export default ImageComponent;
