import React from 'react';
import ProjectSection from './ProjectSection';

const Home = () => {
  return (
    <>
    <div id="home">
      {/* <!-- Start Landing Page Image --> */}
      <div class="landing">
        <div class="home-wrap">
          <div class="home-inner"></div>
        </div>
      </div>
      {/* <!-- End Landing Page Image --> */}

      {/* <!-- Start Landing Page Caption --> */}
      <div class="caption">
        <div class="caption__container">
          <h1>Hello there!</h1>
          <h2>My name is Yana and I'm a UX/UI designer with a background in economics and international relations. I help businesses succeed by creating user-friendly, esthetically pleasing products that bring people together.</h2>
          <h3>I’m open to new opportunities!
            For questions and hello’s</h3>
            <div class="caption__container__links">
              <h3><a href="mailto:ykotliar.wd@gmail.com" target="_blank" rel="noreferrer">Email</a></h3>
              <div class="line"></div>
              <h3><a href="https://www.linkedin.com/in/yana-kotliar">Linkedin</a></h3>
              <div class="line"></div>
              <h3>
                <a href="./img/Yana_Kotliar_CV.pdf" target="_blank">
                  My Resume
                </a>
              </h3>
            </div>
        </div>
      </div>
      {/* <!-- End Landing Page Caption --> */}

      {/* <!-- Start Bouncing Down Arrow --> */}
      <a href="#features" class="down-arrow text-center">
        <div class="arrow d-none d-md-block">
          <i class="fas fa-angle-down"></i>
        </div>
      </a>
    </div>
    <ProjectSection />
    </>
  );
}

export default Home;
