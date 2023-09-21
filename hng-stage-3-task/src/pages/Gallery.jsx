import React from "react";
import { Image } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import data from "../Data.json"
import { Search } from "../components/Search";
import userLogOut from "../auth/userLogout";
import { useNavigate } from "react-router-dom";
const Gallery = ({model, setModel, tempImgSrc, setTempImgSrc, getImage}) => {
  const navigate = useNavigate()
  const {error, logOut} = userLogOut()

  const handleLogOut = async () => {
    await logOut()

    if (error) {
      navigate("/")
    }
  }
//   const [model, setModel] = useState(false);
//   const [tempImgSrc, setTempImgSrc] = useState("");
//   let data = 

//   const getImage = (imgSrc) => {
//     setTempImgSrc(imgSrc);
//     setModel(true);
//   };

  console.log(data);
  return (
    <>
      <Search
        placeholder="Search for an Image"
        data={data}
        getImage={getImage}
        model={model}
        setModel={setModel}
        tempImgSrc={tempImgSrc}
        setTempImgSrc={setTempImgSrc}
      />
      <div className={model ? "model open" : "model"}>
        <Image src={tempImgSrc} />
        <AiOutlineClose onClick={() => setModel(false)} />
      </div>
          <button style={{margin: " 0 auto"}} onClick={handleLogOut}>
            LOGOUT
          </button>
      <div className="gallery">
        {data.map((each, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImage(each.imgSrc)}
            >
              <Image
                src={each.imgSrc}
                style={{ width: "100%", objectFit: "cover" }}
              />
              <div>{each.tag}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
