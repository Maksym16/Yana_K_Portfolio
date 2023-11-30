import React from 'react';
import hero from '../img/Snov/hero.image.png';
import snov1 from '../img/Snov/1.png';
import snov2 from '../img/Snov/1.1.png';
import snov3 from '../img/Snov/2.1.png';
import snov4 from '../img/Snov/2.2.png';
import snov5 from '../img/Snov/3.1.png';
import snov6 from '../img/Snov/3.2.png';
import snov7 from '../img/Snov/4.1.png';
import snov8 from '../img/Snov/4.2.png';
import snov9 from '../img/Snov/5.1.png';
import snov10 from '../img/Snov/5.2.png';
import snov11 from '../img/Snov/6.1.png';
import snov12 from '../img/Snov/6.2.png';
import Reveal from './Reveal';
import Footer from './Footer';

const Snov = () => {
  return (
    <>
      <div id="features" className="offset">
        <div className="jumbotron jumbotron--snov m-0 py-5">
          <div className="container">
            <div className="row text-center px-lg-4 px-xl-5">
              <div className="container__box col-sm-6 col-md-6">
                <div className="feature px-2">
                  <Reveal animationType={'leftToRight'}>
                    <img className="cover-img" src={hero} alt="" />
                  </Reveal>
                </div>
              </div>
              <div className="container__box col-sm-6 col-md-6">
                <Reveal animationType={'rightToLeft'}>
                  <div className="feature px-2">
                    <div className="heading heading--snov">
                      <h3 className="heading__text">SNOV.io</h3>
                      <div className="lead">
                        Snovio is a B2B platform that helps to find leads,
                        automate cold mailings, sell better, and manage deals.
                      </div>

                      <a
                        href="https://snov.io/solutions?gad_source=1&gclid=CjwKCAiA04arBhAkEiwAuNOsIswc3QQhlFBErqoe7RCYYpTdNu8YFWYlUguJ8D0NeBKXxrPaYo766BoC0poQAvD_BwE#generateLeads?utm_source=google&utm_medium=cpc&utm_campaign=17561646683&utm_term=snov.io&utm_content=crt_605570533411|ch_google|kwmt_e|ps_|srct_g|trgt_|src_|groupID_138448770456|campaignID_17561646683|keywordID_kwd-379698198183"
                        type="button"
                        className="cta cta--no-margin"
                        target="_blank"
                        rel="noreferrer"
                      >
                        SNOV.io
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
                <div className="container__box__inner container__box__inner__left-mid">
                  <p className="heavy">Project overview</p>
                </div>
                <div className="container__box__inner container__box__inner__right">
                  <p>
                    Snovio is a B2B platform that helps to find leads, automate
                    cold mailings, sell better, and manage deals. The company
                    offers tools and Chrome extensions for lead generation,
                    verification of email addresses, newsletters, mail warm-up,
                    email opening tracking, and CRM (lead generation, email
                    verification, email drip campaigns, email warm-up, email
                    tracker, CRM).
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
                    <p>Lead UX writer responsible for content updates.</p>
                  </div>
                  <div className="column-container">
                    <p className="heavy">Tools & Methods</p>
                    <p>
                      UX Design (Flows, heuristic evaluation & wireframes)
                      <br />
                      UX writing
                      <br />
                      (Edited existing copy for clarity & tone of voice;
                      <br />
                      developed new microcopy)
                      <br />
                      Figma, Miro
                      <br />
                    </p>
                  </div>
                </div>
                <div className="container__box__inner container__box__inner__right">
                  <div className="column-container">
                    <p className="heavy">Challenge</p>
                    <p>
                      A complicated registration and onboarding process leads to
                      a 40% registration loss and causes problems with tool
                      adoption, retention, and free-to-paid plan conversion.
                      Platform needed some help with the registration process
                      and onboarding, to increase the percentage of
                      registrations and keep users engaged with their website.
                    </p>
                  </div>
                  <div className="column-container">
                    <p className="heavy">Objectives</p>
                    <p>
                      Reduce registration abandonment by 20% and boost retention
                      and paid-plan convention by 30% in the next 4 months.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="jumbotron jumbotron--snov-bg mt-5 py-4">
          <div className="container">
            <div className="row text-center px-lg-4 px-xl-5">
              <div className="container__box__inner">
                <div className="column-container">
                  <p className="title title--snov main">Registration</p>

                  <p>
                    Implementing clear and concise language on new account
                    opening became my main focus. <br />
                    After running user interviews with SMBs and agencies(they
                    are the main users of the website) I identified that users
                    were experiencing confusion due to a lack of guidance or
                    unclear language during the sign-up process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="jumbotron m-0 py-1">
          <div className="container">
            <div className="row text-center px-lg-4 px-xl-5">
              <div className="column-container">
                <p className="title title--snov">Step 1 : Create account</p>
                <div className="container__box__inner container__box__inner--2">
                  <img className="cover-img--mid" src={snov1} alt="" />
                  <img className="cover-img--mid" src={snov2} alt="" />
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <p className="heavy">Before</p>
                  <p>
                    The current screen lacks clarity for users regarding what
                    they are signing up for. The content doesn't provide a
                    sufficient explanation about what the company can offer to
                    users when they create an account.
                  </p>
                  <p className="heavy">After</p>
                  <p>
                    The left side of the screen now includes details about the
                    results of the registration process. This improvement is
                    designed to offer users a more transparent grasp of the
                    purpose of their sign-up and the advantages tied to their
                    account.
                  </p>
                  <p>
                    On the right side of the screen, we switched the "Sign up"
                    button to "Create an account." Using "Sign up" might imply a
                    quick action, but changing it to "Create an account"
                    provides users with a clearer understanding that there are
                    more steps to complete, leading to the creation of their
                    account.
                  </p>
                  <p>
                    Additionally, an info icon was included beside the phone
                    number field, explaining why we request this information and
                    assuring users of its safety. This was in response to client
                    feedback, noting that users feel insecure sharing their
                    phone numbers and often abandon the registration at this
                    stage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron m-0 py-1">
          <div className="container">
            <div className="row text-center px-lg-4 px-xl-5">
              <div className="column-container">
                <p className="title title--snov">Step 2: Confirm email</p>
                <div className="container__box__inner container__box__inner--2">
                  <img className="cover-img--mid" src={snov3} alt="" />
                  <img className="cover-img--mid" src={snov4} alt="" />
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <p className="heavy">Before</p>
                  <p>
                    Once users input all the information for signing up, they
                    are required to undergo security verification via email
                    confirmation. The lack of visual hierarchy and unclear
                    microcopy make users feel disoriented, necessitating them to
                    read a subtext to understand the next steps.
                  </p>
                  <p className="heavy">After</p>
                  <p>
                    To highlight what action the user needs to take next, the
                    header language was updated from “Confirm your email” to
                    “Check your inbox to verify your email address”.
                    Additionally in the subtext below some explanation was
                    provided of what was sent and to which email.
                  </p>
                  <p>
                    To simplify users' access to their email, I suggested to
                    include buttons such as "Open Gmail" or "Open Outlook." etc.
                  </p>
                  <p>
                    To ensure users can locate the verification email, a tip
                    message has been added at the bottom of the page, advising
                    them to check the spam folder or reach out to support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron jumbotron--snov-bg mb-5 py-5">
          <div className="container">
            <div className="row text-center px-lg-4 px-xl-5">
              <div className="container__box__inner">
                <div className="column-container">
                  <p className="title title--snov main">Account & Onboarding</p>

                  <p>
                    At this point, the user has successfully confirmed their
                    account, and Snov.io is gathering data regarding the
                    company's size, the user's role, and their primary
                    objectives within Snov.io. Additionally, Snov.io collects
                    analytics from this data to analyze the user base.
                  </p>
                  <br />
                  <p>
                    Snov.io uses small tips to familiarize the user with the
                    interface during the first visit. These tips can be closed
                    at any time, which means that a large percentage of users
                    might not know how to navigate the platform initially.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron m-0 py-1">
          <div className="container">
            <div className="row text-center px-lg-4 px-xl-5">
              <div className="column-container">
                <p className="title title--snov">
                  Step 3: Collect personal information
                </p>
                <div className="container__box__inner container__box__inner--2">
                  <img className="cover-img--mid" src={snov5} alt="" />
                  <img className="cover-img--mid" src={snov6} alt="" />
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <p className="heavy">Before</p>
                  <p>
                    To collect information, Snov.io introduces a pop-up before
                    users can access their dashboard upon email confirmation.
                    Users also expressed confusion with some questions in the
                    form.
                  </p>
                  <p>
                    The overall flow lacked sufficient emphasis on delivering a
                    personalized experience:
                    <p>
                      - Actions felt quite demanding and overly focused on
                      straightforward question answering;
                    </p>
                    <p>
                      - Certain steps in the user journey lacked cohesion, as
                      the instructions on the Call-to-Action (CTA) buttons did
                      not align with the content on the following screen,
                      impacting the overall user experience.
                    </p>
                  </p>

                  <p className="heavy">After</p>
                  <p>
                    After For a smoother user experience and to encourage data
                    submission, we've eliminated the pop-up. Personal
                    information will now be collected before directing the user
                    to the dashboard.
                  </p>
                  <p>
                    Microcopy:
                    <p>
                      - The Call-to-Action (CTA) was modified from "Go to my
                      account" to "Get started." This change was made to align
                      with the fact that the next screen does not lead to the
                      user's account but opens a Tooltip window. The new
                      microcopy aims to provide clearer guidance, indicating
                      that there might be additional actions for the user to
                      complete before initiating the use of the dashboard.
                    </p>
                    <p>
                      - In this stage of the registration process, since we
                      already have the user's name, the greeting message has
                      been revised from "One last thing" to "Welcome,
                      [username]" to provide the personalized experience.
                    </p>
                    <p>
                      - Users were confused by the question "What's your
                      occupation?"(Occupation in life/Occupation in college?).
                      To clarify that Snov.io is interested in job descriptions
                      and company details, the wording was changed to "What best
                      describes your role?"
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron jumbotron m-0 py-1">
          <div className="container">
            <div className="row text-center px-lg-4 px-xl-5">
              <div className="column-container">
                <p className="title title--snov">Step 4: Account set up</p>
                <div className="container__box__inner container__box__inner--2">
                  <img className="cover-img--mid" src={snov7} alt="" />
                  <img className="cover-img--mid" src={snov8} alt="" />
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <p className="heavy">Before</p>
                  <p>
                    The left-side navigation menu lacks intuitiveness, making it
                    challenging to understand the representation of each icon
                    and the page it will take the user to.
                    <br />
                    Users had to navigate through 11 tooltip pop-ups to get an
                    overview of the platform. If they wished to close the
                    tooltip, most users struggled to find where to reopen it,
                    resulting in confusion during their platform navigation and
                    potentially missing out on the platform's full capabilities.
                  </p>
                  <p className="heavy">After</p>
                  <p>
                    After To make the left-side panel navigation menu more
                    user-friendly and improve usability, we've added brief
                    explanations (microcopy) for each button (icon). This makes
                    it easier for users to grasp the purpose of each button and
                    where it will lead them.
                    <br />
                    Instead of overwhelming users with 10 pop-up windows
                    immediately after accessing the account, a button
                    “Assistant” was added to the left menu. Clicking it
                    activates a tooltip for information, offering users the
                    flexibility to open or close it as needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="jumbotron m-0 py-1">
          <div className="container">
            <div className="row text-center px-lg-4 px-xl-5">
              <div className="column-container">
                <p className="title title--snov ">Step 5: Dashboard</p>
                <div className="container__box__inner container__box__inner--2">
                  <img className="cover-img--mid" src={snov9} alt="" />
                  <img className="cover-img--mid" src={snov10} alt="" />
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <p className="heavy">Before</p>
                  <p>
                    The overwhelming visual hierarchy left users feeling lost,
                    and unsure of actions and clicks:
                    <p>
                      - Hidden CTAs and inconsistent button styles (some icons,
                      some filled) impact usability;
                    </p>
                    <p>
                      - Lack of distinctions between certain icons ( icons
                      repeating across the dashboard; no disabled state, even
                      when the action (e.g. Edit) is impossible due to a lack of
                      information)
                    </p>
                  </p>

                  <p className="heavy">After</p>
                  <p>
                    Highlighted the action we want the user to do the most;
                    added accordion style for features (so the user can see
                    action and description more clearly) Added CTA that will
                    explain the user's next action exam “Install ...” Added
                    consistency for CTAs - moved all CTAs at one place and made
                    them consistent (added text to the buttons, so users won’t
                    guess what button they clicking)
                  </p>
                  <p>
                    To improve usability and user engagement with dashboard I
                    offered to focus on highlighting the actions we want user to
                    do the most. Additionally added accordion style for features
                    (so the user can see action and description more clearly).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron jumbotron--snov-bg mb-5 py-5">
          <div className="container">
            <div className="row text-center px-lg-4 px-xl-5">
              <div className="container__box__inner">
                <div className="column-container">
                  <p className="title title--snov main">Email Onboarding</p>

                  <p>
                    Upon account confirmation, users will receive an onboarding
                    email, with one letter sent each day. The email contains
                    details about the tools and their value, aiming to encourage
                    users to explore more tools and gain additional insights
                    about the platform.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron m-0 py-1">
          <div className="container">
            <div className="row text-center px-lg-4 px-xl-5">
              <div className="column-container">
                <div className="container__box__inner container__box__inner--2">
                  <img className="cover-img--mid" src={snov11} alt="" />
                  <img className="cover-img--mid" src={snov12} alt="" />
                </div>
              </div>

              <div className="container__box__inner">
                <div className="column-container">
                  <p className="heavy">Before</p>
                  <p>
                    Before The steps for set up in this email do not align
                    consistently with the actions users need to take within the
                    account. That causes difficulties in locating actions such
                    as downloading the extension and setting up the email
                    account (e.g. <strong>Download the extension</strong> -
                    Users struggle to locate the action in the dashboard).
                  </p>

                  <p className="heavy">After</p>
                  <p>
                    To provide more personalized experience and improve
                    usability:
                    <p>
                      - Provided clear instructions on what steps to take next,
                      emphasizing how these steps can enhance the user's
                      effective use of the platform;
                    </p>
                    <p>
                      - Provided additional information about the features to
                      give users more understanding why installing them;
                    </p>
                    <p>
                      - Added a call-to-action (Install Prospect) to the email,
                      guiding users to install the feature.
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron jumbotron--snov-bg mb-5 py-5">
          <div className="container">
            <div className="row text-center px-lg-4 px-xl-5">
              <div className="container__box__inner">
                <div className="column-container">
                  <p className="title title--snov main">Outcomes & Results</p>
                  <p>
                    I collaborated closely with the Snov.io UX design team and
                    Product managers. Learning more about client needs and
                    business goals helped us to define the main pain points and
                    simplify the onboarding experience.
                    <br />I put a special focus on updating microcopy and
                    content - which was crucial in providing a consistent user
                    experience and simplifying users' first steps on a platform.
                  </p>
                  <p>
                    As a result, I delivered updated content including copies
                    and interface texts along with a simplified flow for
                    onboarding. This was presented using Hi-fi mockups and also
                    incorporated recommendations for enhancing the visual
                    hierarchy throughout the process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer
          prev={'FIN.do'}
          next={'Glow Yoga'}
          prevLink={'work/fin-do'}
          nextLink={'work/glow-yoga'}
        />
      </div>
    </>
  );
};

export default Snov;
