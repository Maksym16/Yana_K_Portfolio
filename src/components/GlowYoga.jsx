import React from 'react';
import glowYoga from '../img/Glow_yoga/hero.png';
import researchCompare from '../img/Glow_yoga/research-compare-min.png';
import researchResult from '../img/Glow_yoga/research-result-min.png';
import userFlowMin from '../img/Glow_yoga/user-flow-min.png';
import siteMapMin from '../img/Glow_yoga/site-map-min.png';
import topMid from '../img/Glow_yoga/top-mid.png';
import topRight from '../img/Glow_yoga/top-mid.png';
import botLeft from '../img/Glow_yoga/bot-left.png';
import botMid from '../img/Glow_yoga/bot-mid.png';
import botRight from '../img/Glow_yoga/bot-right.png';
import designSystemMin from '../img/Glow_yoga/design-system-min.png';
import testMin from '../img/Glow_yoga/test-min.png';
import Reveal from './Reveal';
import Footer from './Footer';

const GlowYoga = () => {
  return (
    <>
      <div id="features" className="offset glow-yoga">
        <div className="jumbotron jumbotron--glow-yoga m-0 py-5">
          <div className="container">
            <div className="row text-center px-lg-4 px-xl-5">
              <div
                className="container__box col-sm-6 col-md-6 os-animation"
                data-animation="fadeInLeft"
              >
                <div className="feature px-2">
                  <img className="cover-img" src={glowYoga} alt="" />
                </div>
              </div>
              <div
                className="container__box col-sm-6 col-md-6 os-animation"
                data-animation="fadeInRight"
              >
                <div className="feature px-2">
                  <div className="heading heading--glow-yoga">
                    <h3 className="heading__text">
                      Website design <br />
                      for yoga studio
                    </h3>

                    <a
                      href="https://www.figma.com/proto/hgc3Kj3583i4CEtQBgHGAF/Yoga-project?node-id=321%3A10400&scaling=scale-down&page-id=206%3A7359&starting-point-node-id=321%3A10400&fbclid=IwAR3F2wgYlxHRoKeXDJIPzhVdY976R6-oDVMkfOXx-lz_W-l4G-kPlQ2FH6I"
                      type="button"
                      className="cta cta--no-margin"
                      target="_blank"
                      data-aos="fade-in"
                      rel="noreferrer"
                    >
                      Prototype
                    </a>
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
                <div className="container__box__inner container__box__inner__left">
                  <p className="heavy">Task</p>
                </div>
                <div className="container__box__inner container__box__inner__right">
                  <p>
                    I was contacted to help with a website redesign as a part of
                    the overall rebranding of the company. My part in the
                    process was working collaboratively with developers on a new
                    responsive website design. I put special focus on the new
                    checkout/class registration process as it’s one of the first
                    touch-points that can bring more potential future clients.
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
                  <p className="title title--glow-yoga">Story</p>
                  <p>
                    Glow Yoga is a local Brooklyn studio. The new membership
                    enrollment has dropped by 36% from 2020 to 2022 because of
                    the complicated check of our system and not friendly user
                    interface. The Glow decided to update the website structure
                    and new client enrollment process through full rebranding to
                    attract new members with a special focus on client needs.
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
                  <p className="title title--glow-yoga">Research</p>

                  <p>
                    <span className="heavy">Evaluation of current product</span>
                    <br />I started the process by getting to know the existing
                    product and evaluating the website layout and content in
                    order to know what should be improved. Some problems that I
                    found through heuristic evaluation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="jumbotron m-0 py-1"
          style={{ backgroundColor: '#F8F8F8' }}
        >
          <div className="container">
            <img className="cover-img" src={researchCompare} alt="" />
          </div>
        </div>

        <div className="jumbotron m-0 py-1">
          <div className="container">
            <div className="row text-center px-lg-4 px-xl-5">
              <div className="container__box__inner">
                <div className="column-container">
                  <p>
                    <span className="heavy">User interviews</span>
                    <br />
                    1:1 user interviews helped me to discover their frustrations
                    when using the website, and also to know more about their
                    current user experience and overall expectations. Have
                    participants been involved from 25-55yo. Those who have
                    visited the studio on regular basics and those who've been
                    in from time to time.
                  </p>
                  <img className="cover-img" src={researchResult} alt="" />
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
                  <p className="title title--glow-yoga">
                    Information Architecture
                  </p>
                  <p className="heavy">User Flow</p>
                  <p>
                    I created the user task flow for the new membership
                    enrollment since it’s the most important side functionality
                    and new feature.
                    <br />
                    The flow assumes the client enrolls in membership and checks
                    out online.{' '}
                  </p>
                  <img className="cover-img" src={userFlowMin} alt="" />

                  <p className="heavy">Site Map</p>
                  <p>
                    Based on research I brainstormed and organized necessary
                    website content and functionality. Glow Yoga's website had
                    lots of information that did not provide much content and
                    was poorly organized. I decided to include the most
                    important in the new design to make it clean and easy to
                    navigate.{' '}
                  </p>
                  <img className="cover-img" src={siteMapMin} alt="" />
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <p className="title title--glow-yoga">Design</p>
                  <div className="container__box__inner container__box__inner--3">
                    <img
                      className="cover-img cover-img--xlg"
                      src={glowYoga}
                      alt=""
                    />
                    <img
                      className="cover-img cover-img--xlg"
                      src={topMid}
                      alt=""
                    />
                    <img
                      className="cover-img cover-img--xlg"
                      src={topRight}
                      alt=""
                    />
                  </div>

                  <div className="container__box__inner container__box__inner--3">
                    <img
                      className="cover-img cover-img--xlg"
                      src={botLeft}
                      alt=""
                    />
                    <img
                      className="cover-img cover-img--xlg"
                      src={botMid}
                      alt=""
                    />
                    <img
                      className="cover-img cover-img--xlg"
                      src={botRight}
                      alt=""
                    />
                  </div>

                  <div className="text-center">
                    <a
                      href="https://www.figma.com/proto/hgc3Kj3583i4CEtQBgHGAF/Yoga-project?node-id=321%3A10400&scaling=scale-down&page-id=206%3A7359&starting-point-node-id=321%3A10400&fbclid=IwAR3F2wgYlxHRoKeXDJIPzhVdY976R6-oDVMkfOXx-lz_W-l4G-kPlQ2FH6I"
                      type="button"
                      className="cta cta--no-margin"
                      target="_blank"
                      data-aos="fade-in"
                      rel="noreferrer"
                    >
                      see it in action
                    </a>
                  </div>
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <p className="title title--glow-yoga">UI Kit</p>
                  <p>
                    For the UI kit I was responsible of creating a set of icons,
                    buttons and a color palette.
                  </p>
                  <img className="cover-img" src={designSystemMin} alt="" />
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <p className="title title--glow-yoga">Test</p>
                  <p>
                    Before handling design to developers I tested the prototype
                    to get insights on usability and branding using the high
                    fidelity prototype. I 6 had the studio's clients walk
                    through the new registration process and test website
                    navigation. The new membership registration process was 100%
                    successful competition rate.
                  </p>
                  <img className="cover-img" src={testMin} alt="" />
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <p className="title title--glow-yoga">Next steps</p>
                  <ul>
                    <li>
                      <p>
                        {' '}
                        - Collaborate with developers on updating the design and
                        implementing a new checkout process
                      </p>
                    </li>
                    <li>
                      <p> - Support Q&A testing and fix errors if any</p>
                    </li>
                    <li>
                      <p>
                        {' '}
                        - Find out ways to implement feature that would help
                        users stay sign in
                      </p>
                    </li>
                    <li>
                      <p>
                        {' '}
                        - Continue working with stakeholder to support website
                        functionality
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer
          prev={'SNOV.io'}
          next={'Evelina'}
          prevLink={'work/snov'}
          nextLink={'work/evelina'}
        />
      </div>
    </>
  );
};

export default GlowYoga;
