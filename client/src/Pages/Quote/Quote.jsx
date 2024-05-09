import React from "react";
import "./Quote.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Quote = () => {
  const quoteStyle = {
    fontWeight: "thin",
  };

  return (
    <div className="quoteSection">
      <div className="content">
          <FontAwesomeIcon className="leftQuote" icon={faQuoteLeft} />
          <p className="quote font-primary" style={quoteStyle}>
            Creativity is the greatest rebellion in existence.
          </p>
          <h5 className="font-primary">Osho</h5>
          <FontAwesomeIcon className="rightQuote" icon={faQuoteRight} />
      </div>
    </div>
  );
};

export default Quote;
