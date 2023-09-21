import React, { useState } from "react";
import "./App.css";
import Gallery from "./pages/Gallery";
import { Search } from "./components/Search";
import data from "./Data.json";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Authentication from "./pages/Authentication";
import PrivateRoutesLayout from "./Layouts/PrivateRoutesLayout";

function App() {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImage = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <div className="body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="*" element={<Error />} />

        <Route element={<PrivateRoutesLayout/>}>
          <Route
            path="/gallery"
            element={
              <Gallery
                getImage={getImage}
                model={model}
                setModel={setModel}
                tempImgSrc={tempImgSrc}
                setTempImgSrc={setTempImgSrc}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
