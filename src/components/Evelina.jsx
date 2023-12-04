import React from 'react';
import evelinaHome from '../img/Evelina/home-page.png';
import designSystem from '../img/Evelina/design-system.jpg';
import home from '../img/Evelina/home page.png';
import reservation from '../img/Evelina/reservation.png';
import menuDinner from '../img/Evelina/menu-dinner.png';
import imageMenu from '../img/Evelina/image-menu.png';
import imageMenuNew from '../img/Evelina/image-menu-new.png';
import imageH from '../img/Evelina/image-h.png';
import imageHNew from '../img/Evelina/image-h-new.png';
import Reveal from './Reveal';
import Footer from './Footer';

const Evelina = () => {
  return (
    <>
      <div id="features" className="offset evelina">
        <div className="jumbotron jumbotron--evelina m-0 py-5">
          <div className="container">
            <div className="row text-center px-lg-4 px-xl-5">
              <div className="container__box col-sm-6 col-md-6">
                <Reveal animationType={'leftToRight'}>
                  <div className="feature px-2">
                    <img className="cover-img" src={evelinaHome} alt="" />
                  </div>
                </Reveal>
              </div>
              <div className="container__box col-sm-6 col-md-6">
                <Reveal animationType={'rightToLeft'}>
                  <div className="feature px-2">
                    <div className="heading heading--evelina">
                      <h3 className="heading__text">Evelina</h3>
                      <div className="lead">Concept for Evelina Website</div>

                      <a
                        href="https://www.figma.com/proto/gTPUJUH3jlA2Kv452yHONC/Project?page-id=54%3A378&node-id=66%3A269&viewport=241%2C48%2C0.42&scaling=scale-down-width&starting-point-node-id=84%3A708&hide-ui=1&fbclid=IwAR3D8qf22Wk0XiUKXcv0NTwBB0FR1MJeB39IGW9JguvotOVPPFBpotNDMKc"
                        type="button"
                        className="cta"
                        target="_blank"
                        data-aos="fade-in"
                        rel="noreferrer"
                      >
                        see it in action
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron m-0 py-1">
          <div className="container">
            <div className="row text-center px-lg-4 px-xl-5">
              <div className="container__box__inner">
                <div className="container__box__inner container__box__inner__left">
                  <p className="heavy">Task</p>
                </div>
                <div className="container__box__inner container__box__inner__right">
                  <p>
                    Update restaurant website design, using style guide and
                    assets that were given by the client. Improve site usability
                    and accessibility. Design reservation form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="jumbotron jumbotron--dark m-0 py-1">
          <div className="container">
            <div className="row text-center px-lg-4 px-xl-5">
              <div className="container__box__inner">
                <div className="container__box__inner container__box__inner__left">
                  <div className="column-container">
                    <p className="heavy">Duration</p>
                    <p>3 days</p>
                  </div>
                  <div className="column-container">
                    <p className="heavy">Tools</p>
                    <p>Figma</p>
                  </div>
                </div>
                <div className="container__box__inner container__box__inner__right">
                  <div className="column-container">
                    <p className="heavy">My Role</p>
                    <p>
                      Created interface design, interaction design, branding and
                      prototype evaluation. Ran the accessibility tests.
                    </p>
                  </div>
                  <div className="column-container">
                    <p className="heavy">Main Navigation Requirements</p>
                    <p>
                      - Menu
                      <br />
                      - Order (client is using a 3d party website for online
                      orders, do not need to be designed)
                      <br />
                      - Reservation
                      <br />- Home page
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="jumbotron m-0 py-1">
          <div className="container">
            <div className="row text-center px-lg-4 px-xl-5">
              <div className="container__box__inner">
                <div className="column-container">
                  <p className="title title--evelina">Story</p>

                  <p>
                    Evelina is an upscale bistro in the heart of Brooklyn’s
                    neighborhood. Restaurant strive to offer an exceptional
                    experience through creative, thoughtful, and stunning
                    presentation. The client needs an intuitive and beautiful
                    solution for the restaurant concept. I was asked to design a
                    high-fidelity version of the website that will represent
                    Evelina's culture, minimalistic idea, and elegant style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="jumbotron m-0 py-1">
          <div className="container">
            <div className="row text-center px-lg-4 px-xl-5">
              <div className="container__box__inner">
                <div className="column-container">
                  <p className="title title--evelina">Design System</p>

                  <img className="cover-img" src={designSystem} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="jumbotron m-0 py-1">
          <div className="container">
            <div className="row text-center px-lg-4 px-xl-5">
              <div className="container__box__inner">
                <div className="column-container">
                  <p className="title title--evelina">Home Page Design</p>

                  <img className="cover-img" src={home} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="jumbotron m-0 py-1">
          <div className="container">
            <div className="row text-center px-lg-4 px-xl-5">
              <div className="container__box__inner">
                <div className="column-container">
                  <p className="title title--evelina">
                    Reservation Page Design
                  </p>

                  <img className="cover-img" src={reservation} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="jumbotron m-0 py-1">
          <div className="container">
            <div className="row text-center px-lg-4 px-xl-5">
              <div className="container__box__inner">
                <div className="column-container">
                  <p className="title title--evelina">Menu Page Design</p>

                  <img className="cover-img" src={menuDinner} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="jumbotron m-0 py-1">
          <div className="container">
            <div className="row text-center px-lg-4 px-xl-5">
              <div className="container__box__inner">
                <div className="column-container">
                  <p className="title title--evelina">
                    ACCESSIBILITY IMPROVEMENTS
                  </p>

                  <p>
                    Some of the website pages needed accessibility improvement -
                    background and text color was almost the same, some of the
                    text was to bright and didn't follow accessibility contrast
                    ratio rules. After adding changes to the design and before
                    presenting to the client the accessibility test was done
                    using a Color contrast tracker. All pages meet the
                    requirements.
                  </p>

                  <div className="column-container container-margin-3">
                    <p className="heavy">Before</p>
                    <img
                      className="cover-img container-margin-1"
                      src={imageMenu}
                      alt=""
                    />
                    <p className="heavy">After</p>
                    <img
                      className="cover-img container-margin-1"
                      src={imageMenuNew}
                      alt=""
                    />
                  </div>

                  <div className="column-container container-margin-3">
                    <p className="heavy">Before</p>
                    <img
                      className="cover-img container-margin-1"
                      src={imageH}
                      alt=""
                    />
                    <p className="heavy">After</p>
                    <img
                      className="cover-img container-margin-1"
                      src={imageHNew}
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    <a
                      href="https://www.figma.com/proto/gTPUJUH3jlA2Kv452yHONC/Project?page-id=54%3A378&node-id=66%3A269&viewport=241%2C48%2C0.42&scaling=scale-down-width&starting-point-node-id=84%3A708&hide-ui=1&fbclid=IwAR3D8qf22Wk0XiUKXcv0NTwBB0FR1MJeB39IGW9JguvotOVPPFBpotNDMKc"
                      type="button"
                      className="cta"
                      target="_blank"
                      data-aos="fade-in"
                      rel="noreferrer"
                    >
                      see it in action
                    </a>
                  </div>

                  <Footer
                    prev={'Glow Yoga'}
                    next={'Portland Electric'}
                    prevLink={'work/glow-yoga'}
                    nextLink={'work/portland-electric'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Evelina;
