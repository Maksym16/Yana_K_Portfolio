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
              <div className="container__box col-sm-6 col-md-6">
                <Reveal animationType={'leftToRight'}>
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
                </Reveal>
              </div>
              <div className="container__box col-sm-6 col-md-6">
                <Reveal animationType={'rightToLeft'}>
                  <div className="feature px-2">
                    <img className="cover-img" src={glowYoga} alt="" />
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
                  <p className="heavy">Project overview</p>
                </div>
                <div className="container__box__inner container__box__inner__right">
                  <p>
                    Glow Yoga is a local Brooklyn studio. The new membership
                    enrollment has dropped by 36% from 2020 to 2022 because of
                    the complicated check out process and inconvenient user
                    interface. The Glow decided to update the website structure
                    and new client enrollment process through full rebranding to
                    attract new members with a special focus on client needs.
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
                    <p className="heavy">My role</p>
                    <p>UX/UI designer</p>
                  </div>
                  <div className="column-container">
                    <p className="heavy">Tools & Methods</p>
                    <p>
                      UX Design (User interviews,Flows, heuristic evaluation &
                      wireframes) UI Design (Hi-Fi prototype, UI kit) Usability
                      testing Figma, Maze, Miro
                    </p>
                  </div>
                </div>
                <div className="container__box__inner container__box__inner__right">
                  <div className="column-container">
                    <p className="heavy">Challenge</p>
                    <p>
                      I was contacted to help with a website redesign as a part
                      of the overall rebranding of the company. My part in the
                      process was working collaboratively with developers on a
                      new responsive website design to create an engaging and
                      user-friendly booking experience, to boost user
                      satisfaction and increase membership enrollment.
                    </p>
                  </div>
                  <div className="column-container">
                    <p className="heavy">Objectives</p>
                    <p>
                      Enhance user satisfaction by simplifying the
                      checkout/class registration flow, minimizing steps, and
                      reducing form fields. Increase conversion rates by
                      decreasing the number of abandoned membership purchases.
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
                  <p className="title title--glow-yoga main">Research</p>

                  <p>
                    <span className="heavy">Evaluation of current product</span>
                    <br />I started the process by getting to know the existing
                    product and evaluating the website layout and content in
                    order to identify what should be improved. Some problems
                    that I found through heuristic evaluation:
                    <br />
                    - Lack of content hierarchy;
                    <br />
                    - Confusing registration flow and checkout;
                    <br />- Outdated visual design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="jumbotron jumbotron--dark m-0 py-1">
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
                    1:1 user interviews helped me to discover user’s
                    frustrations when using the website providing insights into
                    their current user experience and overall expectations. I
                    conducted unstructured user interviews to delve into users'
                    frustrations when using the website and to gain insights
                    into their current user experience and overall expectations.
                    Through these sessions, I uncovered common pain points and
                    variations in users' habits, providing valuable insights for
                    a more user-centric approach. Main outcomes:
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
                  <p className="title title--glow-yoga main">
                    Information Architecture
                  </p>
                  <p className="heavy">Analysis</p>
                  <p>
                    I employed affinity mapping to analyze user behaviors,
                    identify needs, and pinpoint pain points.
                  </p>
                  <img className="cover-img" src={userFlowMin} alt="" />

                  <p className="heavy">Feature prioritization</p>
                  <p>
                    I prioritized features aligning with both business goals and
                    user needs using Now, Next, Later method. This aided us in
                    identifying the features that are currently most relevant
                    and should be prioritized for focus.
                  </p>
                  <img className="cover-img" src={siteMapMin} alt="" />

                  <p className="heavy">User Flow</p>
                  <p>
                    I developed the user task flow for the new membership
                    enrollment, considering it as a pivotal side functionality
                    and a significant new feature. The flow encompasses the
                    client's enrollment in membership and the online checkout
                    process.
                  </p>
                  <img className="cover-img" src={userFlowMin} alt="" />

                  <p className="heavy">Site Map</p>
                  <p>
                    Following the research findings, I strategized and
                    structured the essential website content and functionality.
                    The existing Glow Yoga website contained information that
                    lacked coherence and organization. In the new design, I
                    prioritized the most crucial elements to ensure a clean and
                    user-friendly navigation experience. Following the research
                    findings, I strategized and structured the essential website
                    content and functionality. The existing Glow Yoga website
                    contained an abundance of information that lacked coherence
                    and organization. In the new design, I prioritized the most
                    crucial elements to ensure a clean and user-friendly
                    navigation experience.
                  </p>
                  <img className="cover-img" src={siteMapMin} alt="" />
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <p className="title title--glow-yoga main">Design</p>
                  <div className="container__box__inner container__box__inner--3">
                    <img
                      className="cover-img cover-img--lg"
                      src={glowYoga}
                      alt=""
                    />
                    <img
                      className="cover-img cover-img--lg"
                      src={topMid}
                      alt=""
                    />
                    <img
                      className="cover-img cover-img--lg"
                      src={topRight}
                      alt=""
                    />
                  </div>

                  <div className="container__box__inner container__box__inner--3">
                    <img
                      className="cover-img cover-img--lg"
                      src={botLeft}
                      alt=""
                    />
                    <img
                      className="cover-img cover-img--lg"
                      src={botMid}
                      alt=""
                    />
                    <img
                      className="cover-img cover-img--lg"
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
                  <p className="title title--glow-yoga main">UI Kit</p>
                  <p>
                    I took charge of crafting a comprehensive UI kit, which
                    involved designing a collection of icons, buttons, and a
                    refined color palette, ensuring a professional and
                    user-centric visual language for the project.
                  </p>
                  <img className="cover-img" src={designSystemMin} alt="" />
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <p className="title title--glow-yoga main">Test</p>
                  <p>
                    Before transitioning the design to the development phase, I
                    conducted usability and branding tests using a high-fidelity
                    prototype. I engaged six studio clients in walking through
                    the new registration process and testing website navigation.
                    The new membership registration process achieved a 100%
                    success rate, validating its usability and effectiveness.
                  </p>
                  <img className="cover-img" src={testMin} alt="" />
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <p className="title title--glow-yoga main">Outcomes & Results</p>
                  <p className="mid">
                    How can we improve the membership enrollment experience to
                    enhance usability, accessibility, and overall effectiveness?
                  </p>
                  <p>
                    The problem is solved by a complete & thorough redesign of
                    Glow Yoga that focuses on:
                    <br />
                    - Updating the design and implementing a new checkout
                    process flow;
                    <br />
                    - Enhancing user experience by addressing usability and
                    accessibility issues;
                    <br />- Collaborating closely with stakeholders to
                    prioritize features that will best meet user needs.
                  </p>
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
