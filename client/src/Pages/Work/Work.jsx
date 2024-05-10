import React, { useEffect, useState } from "react";
import {
  createPortfolio,
  getPortfolioByIdOrAll,
  deletePortfolio,
} from "../../services/portfolioService";
import "./Work.css";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Work = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (!isDataFetched) {
      fetchPortfolios();
    }
  }, [isDataFetched]);

  const fetchPortfolios = async () => {
    try {
      const portfoliosData = await getPortfolioByIdOrAll();
      setPortfolios(portfoliosData.data);
      setIsDataFetched(true);
      console.log(portfoliosData.data, "portfolioss");
    } catch (error) {
      console.error("Error fetching portfolios:", error);
    }
  };

  return (
    <div className="work" id="work">
      <div className="workContainer py-20">
        <Fade>
          <p className="text-center font-secondry">Some of our finest work</p>
          <h4 className="text-center font-primary mt-4 mb-7 text-white">
            Creative <span>Portfolio</span>
          </h4>
        </Fade>
        {/* List */}
        <div className="relative right-2/4 translate-x-2/4 flex gap-6 justify-center items-center mt-24">
          <a className="portfolioCategory" href="">
            <p className="font-primary">
              All <span className="diamond relative">&#x2BC1;</span>
            </p>
          </a>
          <a className="portfolioCategory" href="">
            <p className="font-primary">
              Fashion <span className="diamond relative">&#x2BC1;</span>
            </p>
          </a>
          <a className="portfolioCategory" href="">
            <p className="font-primary">
              Travel <span className="diamond relative">&#x2BC1;</span>
            </p>
          </a>
          <a className="portfolioCategory" href="">
            <p className="font-primary">
              Tech <span className="diamond relative">&#x2BC1;</span>
            </p>
          </a>
          <a className="portfolioCategory" href="">
            <p className="font-primary">
              Product <span className="diamond relative">&#x2BC1;</span>
            </p>
          </a>
        </div>
        {/* List End */}

        {/* Card */}

        <div className="p-4 w-11/12 mx-auto grid items-center gap-4 mt-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 ">
          {portfolios.map((portfolio) => (
            <div
              className="portfolioCard felx relative items-center"
              key={portfolio._id}
            >
              <Link to={`/Projects/${portfolio._id}`}>
                <img
                  className="min-w-64"
                  src={"/test.jpg"}
                  alt={portfolio.title}
                />
                <div className="onHover absolute top-0">
                  <div className="textContainer m-4">
                    <h5 className="font-primary w-full text-white ml-4">
                      {portfolio.title}
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Card End */}
      </div>
    </div>
  );
};

export default Work;
