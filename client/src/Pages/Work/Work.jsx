import React, { useEffect, useState } from "react";
import { createPortfolio, getPortfolioByIdOrAll, deletePortfolio } from "../../services/portfolioService";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import "./Work.css"; // Keep custom CSS for specific styles

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
    } catch (error) {
      console.error("Error fetching portfolios:", error);
    }
  };

  return (
    <div className="work bg-cover" id="work">
      <div className="workContainer py-20">
        <Fade>
          <p className="text-center font-secondry text-lg font-medium">Some of our finest work</p>
          <h4 className="text-center font-primary mt-4 mb-7 text-white text-4xl">
            Creative <span className="text-green-500">Portfolio</span>
          </h4>
        </Fade>
        
        <div className="flex gap-6 justify-center items-center mt-24">
          {['All', 'Fashion', 'Travel', 'Tech', 'Product'].map(category => (
            <a className="portfolioCategory" href="" key={category}>
              <p className="font-primary text-white text-base relative">
                {category} <span className="diamond relative">&#x2BC1;</span>
              </p>
            </a>
          ))}
        </div>
        
        <div className="projectCardContainer flex flex-wrap gap-6 justify-center mt-6">
          {portfolios.map((portfolio) => (
            <div className="portfolioCard max-w-[350px] relative overflow-hidden" key={portfolio._id}>
              <Link to={`/Projects/${portfolio._id}`}>
                <img className="portfolioImg w-full h-full object-cover" src={portfolio.imageUrl} alt={portfolio.title} />
                <div className="onHover absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-500">
                  <div className="textContainer text-center">
                    <h5 className="font-primary text-white text-xl font-semibold">{portfolio.title}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
