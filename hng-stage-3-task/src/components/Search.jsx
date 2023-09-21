import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

export const Search = ({
  placeholder,
  data,
  getImage,
  setModel,
  model,
  tempImgSrc,
}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.tag.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  return (
    <div className="search">
      <div className=" position-relative searchInputs">
        <input className="search-Input"
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="position-absolute searchdiv">
          {filteredData.length == -0 ? (
            <FiSearch size={20} color="white" style={{ cursor: "pointer" }} />
          ) : (
            <AiOutlineClose
              onClick={clearInput}
              size={20}
              color="white"
              style={{ cursor: "pointer" }}
            />
          )}
        </div>
      </div>
      {filteredData.slice(0, 4).length != 0 && (
        <div className="dataResults">
          <div>
            {filteredData.map((each, key) => {
              return (
                <a
                  key={key}
                  className="dataItem"
                  onClick={() => getImage(each.imgSrc)}
                >
                  {each.tag}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

{
  /* <AiOutlineClose style={{zIndex:'1000'}} onClick={() => setModel(false)} /> */
}
