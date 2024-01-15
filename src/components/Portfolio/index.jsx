import React, { Fragment } from "react";
import Portfolios from "./components/Portfolios";
import { useRouter } from "next/router";
import PortfolioDetail from "./components/PortfolioDetail";

const Portfolio = () => {
  const { asPath } = useRouter();
  return (
    <Fragment>
      {!asPath.includes("?") ? <Portfolios /> : <PortfolioDetail />}
    </Fragment>
  );
};

export default Portfolio;
