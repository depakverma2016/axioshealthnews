import React, { useState } from "react";
import axios from "axios";

const FetchNews = () => {
  const [news, setNews] = useState([]);
  const fetchnews = () => {
    axios
      .get("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json")
      .then((response) => {
        setNews(response.data.articles);
      });
  };
  return (
    <>
      <div className="container my-3 px-2">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary my-3" onClick={fetchnews}>
              Click Me
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {news.map((value) => {
            return (
              <div className="col-3">
                <div className="card my-3" style={{width: "18rem"}}>
                  <img src={value.urlToImage} className="card-img-top" alt="..." />
                  <div className="card-body  ">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">
                      {value.description}
                    </p>
                    <a href={value.url} className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FetchNews;
