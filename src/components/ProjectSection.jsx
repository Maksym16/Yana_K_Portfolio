import React from 'react';
import { Link } from 'react-router-dom';
import finDo from '../img/Fin/1.png';
// import portland from '../img/Portland/Home page D.png';
import evelina from '../img/Evelina/Evelina_main_pic.png';
import glowYoga from '../img/Yoga/Main_pic.png';
import snov from '../img/Snov/snov.png';

import Reveal from './Reveal';

const projects = [
  {
    id: 'fin-do',
    projectId: '--fin-do',
    name: 'FIN.do',
    description:
      'Improving the usability of Sing in flow for money transfer application.',
    link: 'projects/fin-do',
    aligmentPosition: 'right',
    imgUrl: finDo,
    btnText: 'View project',
  },
  {
    id: 'snov',
    projectId: '--snov',
    name: 'SNOV.io',
    description: 'Content and UX updates for the B2B platform.',
    link: 'projects/snov',
    aligmentPosition: 'left',
    imgUrl: snov,
    btnText: 'View project',
  },
  {
    id: 'glow-yoga',
    projectId: '--glow-yoga',
    name: 'Glow Yoga',
    description:
      'Updating structure and responsive website design for the yoga studio.',
    link: 'projects/glow-yoga',
    aligmentPosition: 'right',
    imgUrl: glowYoga,
    btnText: 'View project',
  },
  {
    id: 'evelina',
    projectId: '--evelina',
    name: 'Evelina',
    description:
      'Branding and accessibility improvement for the restaurant website.',
    link: 'projects/evelina',
    aligmentPosition: 'left',
    imgUrl: evelina,
    btnText: 'View project',
  },
  // {
  //   id: 'portland-electric',
  //   projectId: '--portland',
  //   name: 'Portland Electric',
  //   description:
  //     'Responsive website design for a better user experience across devices.',
  //   link: 'work/portland-electric',
  //   aligmentPosition: 'right',
  //   imgUrl: portland,
  //   btnText: 'View project',
  // },
];

const renderProjects = () => {
  return projects.map((p, idx) => (
    <div key={idx} className={`jumbotron jumbotron${p.projectId} m-0 py-5`}>
      <div className="container">
        <div
          className={`row text-center column-reverse px-lg-4 px-xl-5 ${
            p.aligmentPosition !== 'right' && 'flex-row-reverse'
          }`}
        >
          <div className="container__box col-sm-6 col-md-6">
            <Reveal
              animationType={
                p.aligmentPosition === 'right' ? 'leftToRight' : 'rightToLeft'
              }
            >
              <div className="feature px-2">
                <div className={`heading heading${p.projectId}`}>
                  <h3 className="heading__text">{p.name}</h3>
                  <div
                    className={`lead ${
                      p.aligmentPosition === 'right' && 'lead--end'
                    }`}
                  >
                    {p.description}
                  </div>

                  <Link
                    to={`/${p.link}`}
                    type="button"
                    className="cta"
                    data-aos="fade-in"
                  >
                    {p.btnText}
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="container__box col-sm-6 col-md-6">
            <Reveal
              animationType={
                p.aligmentPosition === 'right' ? 'rightToLeft' : 'leftToRight'
              }
            >
              <img className="cover-img" src={p.imgUrl} alt="" />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  ));
};

const ProjectSection = () => {
  return (
    <div id="features" className="offset">
      {renderProjects()}
    </div>
  );
};

export default ProjectSection;
