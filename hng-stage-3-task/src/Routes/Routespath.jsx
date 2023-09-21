import React, { useState } from "react";
import Gallery from "../pages/Gallery";
// import { Search } from "./components/Search";
// import data from "./Data.json";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Authentication from "../pages/Authentication";
import PrivateRoutesLayout from "../Layouts/PrivateRoutesLayout";

function Routespath() {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImage = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="*" element={<Error />} />

        <Route element={<PrivateRoutesLayout />}>
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
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default Routespath;
