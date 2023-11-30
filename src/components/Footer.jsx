import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ prev, next, prevLink, nextLink }) => {
  return (
    <div className="container__box__inner">
      <div className="column-container">
        <div className="text-center projects-nav">
          <div className="projects-nav__prev">
            <Link to={`/${prevLink}`} rel="next">
              <span className="n-desc" data-delay="0">
                Previous
              </span>
              <span className="n-title">{prev}</span>
            </Link>
          </div>
          <div className="projects-nav__next">
            <Link to={`/${nextLink}`} rel="next">
              <span className="n-desc" data-delay="0">
                Next
              </span>
              <span className="n-title">{next}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
