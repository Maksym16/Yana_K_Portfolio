import React from 'react';
import finDo1 from '../img/Fin/1.png';
import finDo2 from '../img/Fin/2.png';
import finDo3 from '../img/Fin/3.png';
import finDo4 from '../img/Fin/4.png';
import finDo5 from '../img/Fin/5.png';
import finDo6 from '../img/Fin/6.png';
import finDo7 from '../img/Fin/7.png';
import finDo8 from '../img/Fin/8.png';
import finDo9 from '../img/Fin/9.png';
import finDo10 from '../img/Fin/10.png';
import finDo11 from '../img/Fin/11.png';


const FinDo = () => {
  return (
    <>
      <div id="features" className="offset">
        <div className="jumbotron jumbotron--fin-do m-0 py-5">
          <div className="container">
            <div className="row text-center px-lg-4 px-xl-5">
              <div
                className="container__box col-sm-6 col-md-6 os-animation"
                data-animation="fadeInLeft"
              >
                <div className="feature px-2">
                  <img
                    className="cover-img cover-img--lg"
                    src={finDo1}
                    alt=""
                  />
                </div>
              </div>

              <div
                className="container__box col-sm-6 col-md-6 os-animation"
                data-animation="fadeInRight"
              >
                <div className="heading heading--cook-it">
                  <h3 className="heading__text">FIN.do</h3>
                  <div className="lead">
                    Fin.do is a card-to-card money transfer
                    <br />
                    app enabling you to send money instantly
                    <br />
                    to more than 50 countries.
                  </div>

                  <a
                    href="https://www.figma.com/proto/pEhArGIM6tCcemhsD8MYY6/CAPSTONE?page-id=112%3A4299&node-id=170%3A8105&viewport=281%2C48%2C0.55&scaling=scale-down&starting-point-node-id=170%3A8105&fbclid=IwAR11ZIqqVNnWw6Z6ldAFLUHpMkEheNvnbVRjtsiF0uYHAX6lwf8WNOIVKjE"
                    type="button"
                    className="cta"
                    target="_blank"
                    data-aos="fade-in"
                    rel="noreferrer"
                  >
                    Fin.do
                  </a>
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
                  <p className="heavy">Project overview</p>
                </div>
                <div className="container__box__inner container__box__inner__right">
                  <p>
                    An application for transferring money that allows users to
                    send funds, receive payments, and convert currency globally.
                    The company collaborates with reputable financial
                    institutions like MasterCard and Visa, providing free
                    accounts without monthly charges or hidden fees.
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
                    <p>
                      Lead UX designer responsible for UX analysis, ideation, &
                      UX writing.
                    </p>
                  </div>
                  <div className="column-container">
                    <p className="heavy">Tools & Methods</p>
                    <p>
                      UX analysis (Sign in flow) UX writing (Content analysis
                      and microcopy) Prototyping (basic flow and interactions)
                      Figma
                    </p>
                  </div>
                </div>
                <div className="container__box__inner container__box__inner__right">
                  <div className="column-container">
                    <p className="heavy">Challenge</p>
                    <p>
                      Because of unreliable Sing in process, the ratio of coming
                      back users has dropped by 37% in the past 8 months.
                    </p>
                  </div>
                  <div className="column-container">
                    <p className="heavy">Objectives</p>
                    <p>
                      Analyze the user registration flow and onboarding with a
                      focus on increasing KPIs (adoption, retention, account
                      creation). Increase new user engagement by 10% in the next
                      2 months.{' '}
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
                  <p className="title title--fin-do">Opportunity & Solutions</p>
                  <p>
                    Through analysis and evaluation of the existing onboarding
                    (sign-in flow) was discovered that flow lacks a clear
                    distinction between creating a new account and signing into
                    an existing one. This problem stops new users from finishing
                    the sign-up, and those who already signed up are unsure
                    about using the app for money transfers because they worry
                    about account security. Improving this flow to tackle these
                    issues is crucial for enhancing the overall user experience.
                  </p>
                  <p className="mid">
                    Current flow - The user is stuck because of the lack of a
                    clear distinction.
                  </p>
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <img className="cover-img" src={finDo1} alt="" />
                  <p>
                    To avoid frustration and increase retention, the flow was
                    separated for new users (Create account) and existing users
                    (Sign in). To enhance users' confidence during the
                    Sign-in/Registration process, a stepper (breadcrumbs) was
                    added to provide a clear indication of the number of actions
                    required to complete the process. Additionally, headers were
                    updated to provide users with more guidance and
                    understanding of the actions required at each screen (step
                    of the flow).
                  </p>
                  <p className="mid">
                    New flow - The process was divided for new users (Create
                    account) and returning users (Sign in).
                  </p>
                  <img className="cover-img" src={finDo2} alt="" />
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <p className="title title--fin-do">Outcomes & Results</p>
                  <p>
                    A new onboarding flow was defined through insights from
                    behavioral observation and UX analysis. The result was the
                    creation of a new Sign-in flow that successfully helped the
                    client focus on increasing KPIs (adoption, retention,
                    account creation).
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
                  <p className="title title--fin-do">Sign in</p>
                  <p>
                    In the sign-in process, we've revised header language and
                    refined content, incorporating clear instructions, concise
                    headings, and user-friendly language to guide individuals
                    through each screen. Additionally, a Welcome screen has been
                    added to confirm successful sign-in through phone
                    verification.{' '}
                  </p>
                  <div className="container__box__inner container__box__inner--3">
                    <img
                      className="cover-img cover-img--xlg"
                      src={finDo1}
                      alt=""
                    />
                    <img
                      className="cover-img cover-img--xlg"
                      src={finDo2}
                      alt=""
                    />
                    <img
                      className="cover-img cover-img--xlg"
                      src={finDo3}
                      alt=""
                    />
                  </div>
                  <div className="container__box__inner container__box__inner--2">
                    <img
                      className="cover-img cover-img--xlg"
                      src={finDo4}
                      alt=""
                    />
                    <img
                      className="cover-img cover-img--xlg"
                      src={finDo5}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <p className="title title--fin-do">Create account</p>
                  <p>
                    Quick, transparent, and simple: Users can create an account
                    and initiate easy money transfers in three straightforward
                    steps. To boost user confidence during the registration
                    process, a stepper (breadcrumbs) has been introduced,
                    offering a clear indication of the number of actions needed
                    to complete the process.
                  </p>
                  <div className="container__box__inner container__box__inner--3">
                    <img
                      className="cover-img cover-img--xlg"
                      src={finDo6}
                      alt=""
                    />
                    <img
                      className="cover-img cover-img--xlg"
                      src={finDo7}
                      alt=""
                    />
                    <img
                      className="cover-img cover-img--xlg"
                      src={finDo8}
                      alt=""
                    />
                  </div>
                  <div className="container__box__inner container__box__inner--3">
                    <img
                      className="cover-img cover-img--xlg"
                      src={finDo9}
                      alt=""
                    />
                    <img
                      className="cover-img cover-img--xlg"
                      src={finDo10}
                      alt=""
                    />
                    <img
                      className="cover-img cover-img--xlg"
                      src={finDo11}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <div className="text-center projects-nav">
                    <div className="projects-nav__prev">
                      <a href="evelina.html" rel="prev">
                        <span className="n-desc" data-delay="0">
                          Previous
                        </span>
                        <span className="n-title">Evelina</span>
                      </a>
                    </div>
                    <div className="projects-nav__next">
                      <a href="portland.html" rel="next">
                        <span className="n-desc" data-delay="0">
                          Next
                        </span>
                        <span className="n-title">Portland Electric</span>
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

export default FinDo;
