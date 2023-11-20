import React from 'react';
import yana from '../img/pic 2.png';

const About = () => {
  return (
    <>
    <div id="about" className="offset" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <div className="jumbotron m-0 py-5">
        <div className="container">
          <div className="row text-center px-lg-4 px-xl-5">
            <div className="col-sm-6 col-md-3 os-animation" data-animation="fadeInLeft">
              <div className="about px-2">
                
                <img src={yana} alt="" className="project__item__img" />
                <a href="./img/Yana_Kotliar_CV.pdf" target="_blank" type="button" className="cta" data-aos="fade-in">
                  My Resume
                </a>
              </div>
            </div>

            <div className="col-sm-6 col-md-9 os-animation" data-animation="fadeInRight">
              <div className="about px-4">
                <h1>Hey, I’m Yana</h1>
                <p className="lead">
                  Born and raised Ukrainian I’m currently living in NYC. I love learning and I have studied economics, international relations, web design, and most recently user experience. I began my transition into the field by conducting user research and designing responsive interfaces for companies. During that time, I started developing a taste for pixel-perfect work, screen design and the way ideas can be communicated in the digital world. Since then, I’ve been working as a full-time UX/UI designer and Interface designer as a freelancer.
                </p>
              </div>
            </div>
          </div>
        </div> 
      </div> 

      <div className="jumbotron m-0 py-2" style={{marginTop: '15rem !important'}}>
        <div className="text-center">
          <h3>Let’s connect!</h3>
          <div className="caption__container__links">
            <p className="caption__container__links__link"><a href="mailto:ykotliar.wd@gmail.com" target="_blank" rel="noreferrer">Email</a></p>
            <div className="line"></div>
            <p className="caption__container__links__link"><a href="https://www.linkedin.com/in/yana-kotliar">Linkedin</a></p>
            <div className="line"></div>
            <p className="caption__container__links__link">
              <a href="./img/Yana_Kotliar_CV.pdf" target="_blank">
                My Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
