import React, { useState } from "react";

import Input from "./common/input";
import BasicPagination from "./common/pagination";
import GridList from "./common/list";
import ReadMe from "./common/readme";

import { unsplash, searchPhotos } from "../services/unsplashService.js";
import { toJson } from "unsplash-js";

export default function Main() {
  const [photos, setPhotos] = useState([]);
  const [keywords, setKeywords] = useState("");
  const [paginationData, setPaginationData] = useState({
    totalPage: 0,
    page: 1,
    step: 10
  });
  const [showMessage, setShowMessage] = useState(false);

  const handleInputChange = event => {
    setKeywords(event.target.value);
  };

  const search = page => {
    console.log(page);
    unsplash.search
      .photos(keywords, page, paginationData.step, { orientation: "portrait" })
      .then(toJson)
      .then(json => {
        console.log(json);
        const totalPage = json.total_pages;
        setPaginationData({ ...paginationData, page, totalPage });

        !totalPage || totalPage === 0
          ? setShowMessage(true)
          : setShowMessage(false);

        setPhotos(json.results);
      });
  };

  const changePagination = (event, value) => {
    setPaginationData({ ...paginationData, page: value });
    search(value);
  };

  return (
    <div className="container">
      <Input
        keywords={keywords}
        onChange={handleInputChange}
        onClick={() => search(1)}
      />

      {showMessage && (
        <div className="message">
          No result match. Please try with other keywords.
        </div>
      )}

      {photos && photos.length > 0 && <GridList photos={photos} />}
      {paginationData.totalPage > 0 && (
        <BasicPagination
          count={paginationData.totalPage}
          page={paginationData.page}
          handleChange={changePagination}
        />
      )}
      <ReadMe />
    </div>
  );
}
