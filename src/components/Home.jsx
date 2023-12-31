import React, {useRef} from 'react';
import ProjectSection from './ProjectSection';
import Reveal from './Reveal';
import yanaCV from '../img/YanaKotliarCV.pdf';

const Home = () => {
  const featuresRef = useRef();
  return (
    <>
      <div id="home" ref={featuresRef}>
        {/* <!-- Start Landing Page Image --> */}
        <div className="landing">
          <div className="home-wrap">
            <div className="home-inner"></div>
          </div>
        </div>
        {/* <!-- End Landing Page Image --> */}

        {/* <!-- Start Landing Page Caption --> */}
        <div className="caption">
          <div className="caption__container">
            <Reveal animationType={'leftToRight'}>
              <h1>Hello there!</h1>
            </Reveal>
            <Reveal animationType={'leftToRight'} delay={0.2}>
              <h2>
                I’m Yana UX/UI designer based in PA. <br />
                I design applications, websites, <br />
                and digital products.
              </h2>
            </Reveal>
            <Reveal animationType={'leftToRight'} delay={0.3}>
              <h3>Scroll down to see my work! </h3>
            </Reveal>
            <div className="caption__container__links">
              <Reveal animationType={'botToTop'} delay={0.6}>
                <h3>
                  <a
                    href="mailto:ykotliar.wd@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Email
                  </a>
                </h3>
              </Reveal>
              <div className="line"></div>
              <Reveal animationType={'botToTop'} delay={0.7}>
                <h3>
                  <a href="https://www.linkedin.com/in/yana-kotliar" target="_blank" rel="noreferrer">
                    Linkedin
                  </a>
                </h3>
              </Reveal>
              <div className="line"></div>
              <Reveal animationType={'botToTop'} delay={0.8}>
                <h3>
                  <a href={yanaCV} target="_blank" rel="noreferrer">
                    Resume
                  </a>
                </h3>
              </Reveal>
            </div>
          </div>
        </div>
        {/* <!-- End Landing Page Caption --> */}

        {/* <!-- Start Bouncing Down Arrow --> */}
        <div
          className="down-arrow text-center"
          onClick={() => window.scrollTo({ top: featuresRef.current.clientHeight, behavior: 'smooth' })}
        >
          <div className="arrow d-none d-md-block">
            <i className="fas fa-angle-down"></i>
          </div>
        </div>
      </div>
      <ProjectSection />
    </>
  );
};

export default Home;
