import React from 'react';
import Reveal from './Reveal';

import yana from '../img/pic 2.png';
import yanaCV from '../img/YanaKotliarCV.pdf';

const About = () => {
  return (
    <>
      <div
        id="about"
        className="offset"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div className="jumbotron m-0 py-5">
          <div className="about-container">
            <Reveal animationType={'leftToRight'} delay={0.1}>
              <img src={yana} alt="" className="about-img" />
            </Reveal>
            <div className="about-container__info-container">
              <div className="about-description">
                <Reveal animationType={'rightToLeft'} delay={0.1}>
                  <h1>Hey, I’m Yana</h1>
                </Reveal>
                <Reveal animationType={'rightToLeft'} delay={0.3}>
                  <p className="lead">
                    I am a multi-disciplinary designer specializing in UI/UX.
                    I’ve had experience in various design facets, including UX
                    writing, product and conceptual design. My approach is
                    centered on designing with empathy for the human experience.
                  </p>
                </Reveal>
                <Reveal animationType={'rightToLeft'} delay={0.4}>
                  <p className="lead">
                    Love books, photography and piano music.
                  </p>
                </Reveal>
              </div>
              <Reveal animationType={'rightToLeft'} delay={0.6}>
                <a
                  href={yanaCV}
                  target="_blank"
                  type="button"
                  className="cta"
                  rel="noreferrer"
                >
                  My Resume
                </a>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="jumbotron jumbotron--dark m-0 py-5">
          <Reveal animationType={'fadeIn'} delay={0.7}>
            <div className="box">
              <h1>How can I help</h1>
              <div className="container-wrapper">
                <div className="column-container">
                  <div className="column-container">
                    <p className="heavy">Design strategy</p>
                    <p>Optimizing user experience for success.</p>
                  </div>
                  <div className="column-container">
                    <p className="heavy">UX writing</p>
                    <p>Enhancing UX with clear, helpful language.</p>
                  </div>
                </div>

                <div className="column-container">
                  <div className="column-container">
                    <p className="heavy">Information architecture</p>
                    <p>Structuring information for better usability.</p>
                  </div>
                  <div className="column-container">
                    <p className="heavy">UI design</p>
                    <p>Creating intuitive, visually appealing interfaces.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal animationType={'fadeIn'} delay={0.7}>
          <div className="wrapper my-5 py-2">
            <h3>Let’s connect!</h3>
            <div className="caption__container__links">
              <p className="caption__container__links__link">
                <a
                  href="mailto:ykotliar.wd@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Email
                </a>
              </p>
              <div className="line"></div>
              <p className="caption__container__links__link">
                <a href="https://www.linkedin.com/in/yana-kotliar">Linkedin</a>
              </p>
              <div className="line"></div>
              <p className="caption__container__links__link">
                <a href={yanaCV} target="_blank" rel="noreferrer">
                  My Resume
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
};

export default About;
