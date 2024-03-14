import React from 'react';
import glowYoga from '../img/Yoga/Main_pic.png';
import researchCompare from '../img/Yoga/research-compare-min.png';
import researchResult from '../img/Yoga/research-result.png';
import analysis from '../img/Yoga/analysis.png';
import featurePrioritization from '../img/Yoga/feature-prioritization.png';
import userFlow from '../img/Yoga/user-flow.png';
import siteMapMin from '../img/Yoga/site-map.png';
import membership from '../img/Yoga/Other_Pic.png';
import membershipMob from '../img/Yoga/membership-mob.png';
import allSet from '../img/Yoga/all_set.png';
import faq from '../img/Yoga/faq.png';
import price from '../img/Yoga/price.png';
import journey from '../img/Yoga/journey.png';
import classes from '../img/Yoga/classes.png';
import pDetailes from '../img/Yoga/p-detailes.png';
import checkout from '../img/Yoga/checkout.png';
import review from '../img/Yoga/review.png';
import designSystem from '../img/Yoga/design-system.png';
import testMin from '../img/Yoga/test.png';
import Reveal from './Reveal';
import Footer from './Footer';
import glovYogaDoc from '../img/GlovYogaResearch.pdf';

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
                <div className="container__box__inner container__box__inner__left-mid">
                  <div className="column-container">
                    <p className="heavy">My role</p>
                    <p>UX/UI designer</p>
                  </div>
                  <div className="column-container">
                    <p className="heavy">Tools & Methods</p>
                    <p>
                      UX Design (User interviews, flows, heuristic evaluation &
                      wireframes)
                      <br />
                      <br /> UI Design (Hi-Fi prototype, UI kit)
                      <br />
                      <br /> Usability testing
                      <br />
                      <br /> Figma, Maze, Miro
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
                  <p className="title title--glow-yoga main py-3">Research</p>

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
                  <p className="heavy">Analysis</p>
                  <p>
                    I employed affinity mapping to analyze user behaviors,
                    identify needs, and pinpoint pain points.
                  </p>
                  <img className="cover-img" src={analysis} alt="" />

                  <p className="heavy">Feature prioritization</p>
                  <p>
                    I prioritized features aligning with both business goals and
                    user needs using Now, Next, Later method. This aided us in
                    identifying the features that are currently most relevant
                    and should be prioritized for focus.
                  </p>
                  <img
                    className="cover-img"
                    src={featurePrioritization}
                    alt=""
                  />
                  <p className="title title--glow-yoga main py-5">
                    Information Architecture
                  </p>
                  <p className="heavy">User Flow</p>
                  <p>
                    I developed the user task flow for the new membership
                    enrollment, considering it as a pivotal side functionality
                    and a significant new feature. The flow encompasses the
                    client's enrollment in membership and the online checkout
                    process.
                  </p>
                  <img className="cover-img" src={userFlow} alt="" />

                  <p className="heavy">Site Map</p>
                  <p>
                    Following the research findings, I strategized and
                    structured the essential website content and functionality.
                    The existing Glow Yoga website contained information that
                    lacked coherence and organization. In the new design, I
                    prioritized the most crucial elements to ensure a clean and
                    user-friendly navigation experience.
                  </p>
                  <img className="cover-img" src={siteMapMin} alt="" />
                  <div className="text-center">
                    <a
                      href={glovYogaDoc}
                      type="button"
                      className="cta cta--yoga"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View detailed user research report
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="jumbotron m-0 pt-4 pb-1">
          <div className="container">
            <div className="row text-center">
              <div className="column-container">
                <p className="title title--glow-yoga main py-3">Design</p>
              </div>
            </div>
          </div>
        </div>

        <div className="jumbotron jumbotron--yoga-light m-0 py-1">
          <div className="container">
            <div className="row text-center">
              <div className="column-container">
                <div className="container__box__inner container__box__inner--2">
                  <img
                    className="cover-img cover-img"
                    src={glowYoga}
                    alt=""
                  />
                  <div className="column-container column-container--center-margin">
                    <p className="heavy">New updated design</p>
                    <p>
                      The updated responsive design not only reflects the
                      studio's cultural essence but also ensures a consistent
                      representation across various devices.
                    </p>
                  </div>
                </div>

                <div className="container__box__inner container__box__inner--2">
                  <div className="column-container column-container--center">
                    <p className="heavy">Easy membership enrollment</p>
                    <p>
                      Sign-up process for new memberships offers a smoother and
                      more straightforward experience, making it easy for users
                      to enroll and become members.
                    </p>
                  </div>
                  <img
                    className="cover-img cover-img"
                    src={membership}
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
                  <p className="title title--glow-yoga main py-4">
                    Hi-fidelity mockups
                  </p>
                  <div className="container__box__inner container__box__inner--3">
                    <img
                      className="cover-img cover-img--fin-do"
                      src={journey}
                      alt=""
                    />
                    <img
                      className="cover-img cover-img--fin-do"
                      src={classes}
                      alt=""
                    />
                    <img
                      className="cover-img cover-img--fin-do"
                      src={faq}
                      alt=""
                    />
                  </div>
                  <div className="container__box__inner container__box__inner--3">
                  <img
                      className="cover-img cover-img--fin-do"
                      src={price}
                      alt=""
                    />
                    <img
                      className="cover-img cover-img--fin-do"
                      src={membershipMob}
                      alt=""
                    />
                    <img
                      className="cover-img cover-img--fin-do"
                      src={pDetailes}
                      alt=""
                    />
                  </div>
                  <div className="container__box__inner container__box__inner--3">
                    <img
                      className="cover-img cover-img--fin-do"
                      src={checkout}
                      alt=""
                    />
                    <img
                      className="cover-img cover-img--fin-do"
                      src={review}
                      alt=""
                    />
                    <img
                      className="cover-img cover-img--fin-do"
                      src={allSet}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <p className="title title--glow-yoga main py-3">UI Kit</p>
                  <p>
                    I took charge of crafting a comprehensive UI kit, which
                    involved designing a collection of icons, buttons, and a
                    refined color palette, ensuring a professional and
                    user-centric visual language for the project.
                  </p>
                  <img className="cover-img" src={designSystem} alt="" />
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <p className="title title--glow-yoga main py-3">Test</p>
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
                  <p className="title title--glow-yoga main py-3">
                    Outcomes & Results
                  </p>
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
          prevLink={'projects/snov'}
          nextLink={'projects/evelina'}
        />
      </div>
    </>
  );
};

export default GlowYoga;
