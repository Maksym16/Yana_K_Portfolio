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

const Evelina = () => {
  return (
    <>
      <div id="features" class="offset evelina">
        <div class="jumbotron jumbotron--evelina m-0 py-5">
          <div class="container">
            <div class="row text-center px-lg-4 px-xl-5">
              <div
                class="container__box col-sm-6 col-md-6 os-animation"
                data-animation="fadeInLeft"
              >
                <div class="feature px-2">
                  <div class="heading heading--evelina">
                    <h3 class="heading__text">Evelina</h3>
                    <div class="lead">Concept for Evelina Website</div>

                    <a
                      href="https://www.figma.com/proto/gTPUJUH3jlA2Kv452yHONC/Project?page-id=54%3A378&node-id=66%3A269&viewport=241%2C48%2C0.42&scaling=scale-down-width&starting-point-node-id=84%3A708&hide-ui=1&fbclid=IwAR3D8qf22Wk0XiUKXcv0NTwBB0FR1MJeB39IGW9JguvotOVPPFBpotNDMKc"
                      type="button"
                      class="cta"
                      target="_blank"
                      data-aos="fade-in"
                      rel="noreferrer"
                    >
                      see it in action
                    </a>
                  </div>
                </div>
              </div>

              <div
                class="container__box col-sm-6 col-md-6 os-animation"
                data-animation="fadeInRight"
              >
                <img class="cover-img" src={evelinaHome} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="jumbotron m-0 py-1">
          <div class="container">
            <div class="row text-center px-lg-4 px-xl-5">
              <div class="container__box__inner">
                <div class="container__box__inner container__box__inner__left">
                  <p class="heavy">Task</p>
                </div>
                <div class="container__box__inner container__box__inner__right">
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

        <div class="jumbotron jumbotron--dark m-0 py-1">
          <div class="container">
            <div class="row text-center px-lg-4 px-xl-5">
              <div class="container__box__inner">
                <div class="container__box__inner container__box__inner__left">
                  <div class="column-container">
                    <p class="heavy">Duration</p>
                    <p>3 days</p>
                  </div>
                  <div class="column-container">
                    <p class="heavy">Tools</p>
                    <p>Figma</p>
                  </div>
                </div>
                <div class="container__box__inner container__box__inner__right">
                  <div class="column-container">
                    <p class="heavy">My Role</p>
                    <p>
                      Created interface design, interaction design, branding and
                      prototype evaluation. Ran the accessibility tests.
                    </p>
                  </div>
                  <div class="column-container">
                    <p class="heavy">Main Navigation Requirements</p>
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

        <div class="jumbotron m-0 py-1">
          <div class="container">
            <div class="row text-center px-lg-4 px-xl-5">
              <div class="container__box__inner">
                <div class="column-container">
                  <p class="title title--evelina">Story</p>

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

        <div class="jumbotron m-0 py-1">
          <div class="container">
            <div class="row text-center px-lg-4 px-xl-5">
              <div class="container__box__inner">
                <div class="column-container">
                  <p class="title title--evelina">Design System</p>

                  <img class="cover-img" src={designSystem} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="jumbotron m-0 py-1">
          <div class="container">
            <div class="row text-center px-lg-4 px-xl-5">
              <div class="container__box__inner">
                <div class="column-container">
                  <p class="title title--evelina">Home Page Design</p>

                  <img class="cover-img" src={home} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="jumbotron m-0 py-1">
          <div class="container">
            <div class="row text-center px-lg-4 px-xl-5">
              <div class="container__box__inner">
                <div class="column-container">
                  <p class="title title--evelina">Reservation Page Design</p>

                  <img class="cover-img" src={reservation} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="jumbotron m-0 py-1">
          <div class="container">
            <div class="row text-center px-lg-4 px-xl-5">
              <div class="container__box__inner">
                <div class="column-container">
                  <p class="title title--evelina">Menu Page Design</p>

                  <img class="cover-img" src={menuDinner} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="jumbotron m-0 py-1">
          <div class="container">
            <div class="row text-center px-lg-4 px-xl-5">
              <div class="container__box__inner">
                <div class="column-container">
                  <p class="title title--evelina">ACCESSIBILITY IMPROVEMENTS</p>

                  <p>
                    Some of the website pages needed accessibility improvement -
                    background and text color was almost the same, some of the
                    text was to bright and didn't follow accessibility contrast
                    ratio rules. After adding changes to the design and before
                    presenting to the client the accessibility test was done
                    using a Color contrast tracker. All pages meet the
                    requirements.
                  </p>

                  <div class="column-container container-margin-3">
                    <p class="heavy">Before</p>
                    <img
                      class="cover-img container-margin-1"
                      src={imageMenu}
                      alt=""
                    />
                    <p class="heavy">After</p>
                    <img
                      class="cover-img container-margin-1"
                      src={imageMenuNew}
                      alt=""
                    />
                  </div>

                  <div class="column-container container-margin-3">
                    <p class="heavy">Before</p>
                    <img
                      class="cover-img container-margin-1"
                      src={imageH}
                      alt=""
                    />
                    <p class="heavy">After</p>
                    <img
                      class="cover-img container-margin-1"
                      src={imageHNew}
                      alt=""
                    />
                  </div>
                  <div class="text-center">
                    <a
                      href="https://www.figma.com/proto/gTPUJUH3jlA2Kv452yHONC/Project?page-id=54%3A378&node-id=66%3A269&viewport=241%2C48%2C0.42&scaling=scale-down-width&starting-point-node-id=84%3A708&hide-ui=1&fbclid=IwAR3D8qf22Wk0XiUKXcv0NTwBB0FR1MJeB39IGW9JguvotOVPPFBpotNDMKc"
                      type="button"
                      class="cta"
                      target="_blank"
                      data-aos="fade-in"
                      rel="noreferrer"
                    >
                      see it in action
                    </a>
                  </div>

                  <div class="text-center projects-nav">
                    <div class="projects-nav__prev">
                      <a href="glow_yoga.html" rel="prev">
                        <span class="n-desc" data-delay="0">
                          Previous
                        </span>
                        <span class="n-title">Glow Yoga</span>
                      </a>
                    </div>
                    <div class="projects-nav__next">
                      <a href="cook_it.html" rel="next">
                        <span class="n-desc" data-delay="0">
                          Next
                        </span>
                        <span class="n-title">Cook It</span>
                      </a>
                    </div>
                  </div>
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
