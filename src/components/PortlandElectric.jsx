import React from 'react';
import portlandHome from '../img/Portland/Home page D.png';
import adServe from '../img/Portland/AD-Serv.png';
import tice from '../img/Portland/TICE.png';
import journeyMap from '../img/Portland/journey-map.png';
import userFlow from '../img/Portland/user-flow.png';
import siteMap from '../img/Portland/site-map 1.png';
import mockupPortland from '../img/Portland/mockup-portland.png';
import mockupPortland1 from '../img/Portland/mockup-portland-1.png';
import wireframe from '../img/Portland/wireframe.png';
import wireframe2 from '../img/Portland/wireframe-2.png';
import userTests from '../img/Portland/user-tests.png';
import mockupPortland2 from '../img/Portland/mockup-portland-2.png';
import mockupPortland3 from '../img/Portland/mockup-portland-3.png';
import projectpageD  from '../img/Portland/Projectpage D.png';
import contactPage from '../img/Portland/Contact page D.png';
import designSystem from '../img/Portland/design-system.png';
import logo3 from '../img/Portland/logo-3.png';
import logo2 from '../img/Portland/logo-2.png';
import logo1 from '../img/Portland/logo-1.png';


const PortlandElectric = () => {
  return (
    <>
      <div id="features" className="offset">
        <div className="jumbotron jumbotron--portland m-0 py-5">
          <div className="container">
            <div className="row text-center px-lg-4 px-xl-5">
              <div
                className="container__box col-sm-6 col-md-6 os-animation"
                data-animation="fadeInLeft"
              >
                <div className="feature px-2">
                  <div className="heading heading--portland">
                    <h3 className="heading__text">Portland Electric</h3>
                    <div className="lead">website redesign</div>

                    <a
                      href="https://www.figma.com/proto/CU0k0M5XaAVabq1y69xKQ5/redesign?page-id=343%3A1626&node-id=343%3A1627&viewport=281%2C48%2C0.17&scaling=scale-down&starting-point-node-id=343%3A1627&show-proto-sidebar=1&fbclid=IwAR2XUYo3n3FeZPMUqYDqN9JY7RH-O0Ui6WQRGi3YZQGcbGkzai6Q_KqOgr0"
                      type="button"
                      className="cta cta--no-margin"
                      target="_blank"
                      data-aos="fade-in"
                      rel="noreferrer"
                    >
                      Mobile prototype
                    </a>
                    <a
                      href="https://www.figma.com/proto/CU0k0M5XaAVabq1y69xKQ5/redesign?page-id=387%3A5231&node-id=401%3A6241&viewport=281%2C48%2C0.07&scaling=min-zoom&starting-point-node-id=401%3A6241&fbclid=IwAR13riHswDmGDgsDDuvebExp424NWpJoBjuLu1M4-JsX55MDml8zJalyVw4"
                      type="button"
                      className="cta cta--no-margin"
                      target="_blank"
                      data-aos="fade-in"
                      rel="noreferrer"
                    >
                      Website prototype
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="container__box col-sm-6 col-md-6 os-animation"
                data-animation="fadeInRight"
              >
                <div className="feature px-2">
                  <img
                    className="cover-img"
                    src={portlandHome}
                    alt=""
                  />
                </div>
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
                    Update website design and functionality for an electric
                    company to help increase online user engagement.
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
                    <p>3 weeks</p>
                  </div>
                  <div className="column-container">
                    <p className="heavy">Tools</p>
                    <p>
                      Figma
                      <br />
                      Maze
                      <br />
                    </p>
                  </div>
                </div>
                <div className="container__box__inner container__box__inner__right">
                  <div className="column-container">
                    <p className="heavy">My Role</p>
                    <p>
                      Defined the goals of UX research
                      <br />
                      Usability Evaluation
                      <br />
                      Facilitated usability testing
                      <br />
                      Added the appointment/contact form
                      <br />
                      Crafted lo and hi fidelity responsive mockups
                      <br />
                      Designed a new, fresh logo for the company
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
                  <p className="title title--portland">Story</p>

                  <p>
                    Portland Electric is an electric company in Vancouver, WA.
                    They have been on the market for more than 15 years, and
                    never since did they update their website. Portland Electric
                    has done a lot of big projects, and they mostly worked with
                    the same clients for years, so they didn't need a
                    good-functioned website a lot.
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
                  <p className="title title--portland">UX Research</p>
                  <p className="heavy">Goals</p>
                  <p>
                    Find out who is a target audience of PE site
                    <br />
                    Which device participants perfer to use
                    <br />
                    Get some feedback on what do they think about a current
                    website, what information might be missing and what was
                    their overall experience with PE website.
                  </p>
                </div>
              </div>

              <div className="container__box__inner container__box__inner--half">
                <div className="container__box__inner container__box__inner__left">
                  <div className="column-container">
                    <p className="heavy">User Interviews/Surveys</p>
                    <p>
                      Participants
                      <br />
                      20 people who work in construction/project management age
                      25 to 60
                      <br />
                      10-15 questions survey followed by Zoom interviews with
                      open-ended questions
                    </p>
                  </div>
                </div>
                <div className="container__box__inner container__box__inner__right">
                  <div className="column-container">
                    <p className="heavy">Insights</p>
                    <p>
                      45% - use a mobile device to search for a website
                      <br />
                      Participants find lack of information on the website
                      (interviewers didn't find the description of services,
                      projects, pictures)
                      <br />
                      Interviewers said that the website has very poor
                      navigation. <br />
                      Not all of the participants were ready to schedule
                      estimate right away, some just wanted to contact and get
                      more information, so we agreed on adding a contact form
                      also.
                    </p>
                  </div>
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <p className="heavy">Competitive Analysis</p>
                  <p>
                    To determine the strengths and weaknesses of competitors I
                    have done a competitive analysis using SWOT method for the
                    local companies TICE and AA.
                  </p>

                  <img
                    className="cover-img"
                    src={adServe}
                    alt=""
                  />
                  <img
                    className="cover-img"
                    src={tice}
                    alt=""
                  />
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <p className="heavy">Journey Map</p>
                  <p>
                    After learning the problems users are facing, I created
                    journey map to understand what will the users possible
                    experience will be when using website.
                  </p>
                  <img
                    className="cover-img"
                    src={journeyMap}
                    alt=""
                  />
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
                  <p className="title title--portland">Information Architecture</p>
                  <p className="heavy">User Flow</p>
                  <img
                    className="cover-img"
                    src={userFlow}
                    alt=""
                  />
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <p className="heavy">Site Map</p>
                  <img
                    className="cover-img"
                    src={siteMap}
                    alt=""
                  />
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <p className="heavy">Wireframes</p>
                  <p>
                    For this project I was creating both mobile and web versions
                    of the product. I started designing mobile-first.
                  </p>
                  <div className="container__box__inner container__box__inner--2">
                    <img
                      className="mockup"
                      src={mockupPortland}
                      alt=""
                    />
                    <img
                      className="mockup"
                      src={mockupPortland1}
                      alt=""
                    />
                  </div>

                  <div className="container__box__inner container__box__inner--2">
                    <img
                      className="cover-img cover-img--lg"
                      src={wireframe}
                      alt=""
                    />
                    <img
                      className="cover-img cover-img--lg"
                      src={wireframe2}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="container__box__inner container__box__inner--half">
                <div className="container__box__inner container__box__inner__left">
                  <div className="column-container">
                    <p className="heavy">User Testing</p>
                    <p>
                      Participants: 10 <br />
                      Number of Tasks: 2 <br />
                      Via Zoom
                    </p>
                  </div>
                </div>
                <div className="container__box__inner container__box__inner__right">
                  <div className="column-container">
                    <p className="heavy">Insights</p>
                    <p>
                      During the usability test participants got confused
                      between scheduling estimate and request the contact. Some
                      CTA were not used as asked.
                    </p>
                  </div>
                </div>
              </div>

              <div className="container__box__inner container__box__inner--half">
                <div className="container__box__inner container__box__inner__left">
                  <img
                    className="cover-img"
                    src={userTests}
                    alt=""
                  />
                </div>
                <div className="container__box__inner container__box__inner__right">
                  <div className="column-container column-container--center">
                    <p className="heavy">Solution</p>
                    <p>
                      - Contact and schedule appointment forms were combined
                      together with drop down selection menu either Schedule or
                      Contact
                      <br />
                      - CTA buttons were added to all pages.
                      <br />
                    </p>
                  </div>
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <p className="title title--portland">Final Design</p>
                  <div className="container__box__inner container__box__inner--2">
                    <img
                      className="mockup"
                      src={mockupPortland2}
                      alt=""
                    />
                    <img
                      className="mockup"
                      src={mockupPortland3}
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    <a
                      href="https://www.figma.com/proto/CU0k0M5XaAVabq1y69xKQ5/redesign?page-id=343%3A1626&node-id=343%3A1627&viewport=281%2C48%2C0.17&scaling=scale-down&starting-point-node-id=343%3A1627&show-proto-sidebar=1&fbclid=IwAR2XUYo3n3FeZPMUqYDqN9JY7RH-O0Ui6WQRGi3YZQGcbGkzai6Q_KqOgr0"
                      type="button"
                      className="cta"
                      target="_blank"
                      data-aos="fade-in"
                      rel="noreferrer"
                    >
                      Mobile prototype
                    </a>
                  </div>

                  <div className="container__box__inner container__box__inner--3">
                    <img
                      className="cover-img cover-img--sm"
                      src={portlandHome}
                      alt=""
                    />
                    <img
                      className="cover-img cover-img--sm"
                      src={projectpageD}
                      alt=""
                    />
                    <img
                      className="cover-img cover-img--sm"
                      src={contactPage}
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    <a
                      href="https://www.figma.com/proto/CU0k0M5XaAVabq1y69xKQ5/redesign?page-id=387%3A5231&node-id=401%3A6241&viewport=281%2C48%2C0.07&scaling=min-zoom&starting-point-node-id=401%3A6241&fbclid=IwAR13riHswDmGDgsDDuvebExp424NWpJoBjuLu1M4-JsX55MDml8zJalyVw4"
                      type="button"
                      className="cta"
                      target="_blank"
                      data-aos="fade-in"
                      rel="noreferrer"
                    >
                      Website prototype
                    </a>
                  </div>
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <p className="heavy">Design System</p>
                  <img src={designSystem} alt="" />
                </div>
              </div>

              <div className="container__box__inner container__box__inner--half container-margin-3">
                <div className="container__box__inner container__box__inner__left">
                  <p className="heavy">Logo update</p>
                  <img
                    className="mockup mockup--xsx"
                    src={logo3}
                    alt=""
                  />
                  <img src={logo1} alt="" />
                </div>
                <div className="container__box__inner container__box__inner__right">
                  <div className="column-container column-container--center">
                    <p>Current Logo and Design process</p>
                  </div>
                </div>
              </div>

              <div className="container__box__inner container__box__inner--half">
                <div className="container__box__inner container__box__inner__left">
                  <div className="column-container column-container--center">
                    <p>
                      The final logo was present in three colors for my client
                    </p>
                  </div>
                </div>
                <div className="container__box__inner container__box__inner__right">
                  <img src={logo2} alt="" />
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <p className="title title--portland">Final Thoughts</p>
                  <p>
                    This project was my first experience working with a real
                    client. It was important for me to create a product that
                    will be pleasing but to keep the idea and style that the
                    company already has. I've learned that testing early is
                    crucial in creating a user-oriented product. Using multiple
                    research methods helped me to know the user better and gave
                    me a lot of information about what exactly I needed to
                    update at the website.
                  </p>
                  <div className="text-center projects-nav">
                    <div className="projects-nav__prev">
                      <a href="cook_it.html" rel="prev">
                        <span className="n-desc" data-delay="0">
                          Previous
                        </span>
                        <span className="n-title">Cook It</span>
                      </a>
                    </div>
                    <div className="projects-nav__next">
                      <a href="evelina.html" rel="next">
                        <span className="n-desc" data-delay="0">
                          Next
                        </span>
                        <span className="n-title">Evelina</span>
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

export default PortlandElectric;
