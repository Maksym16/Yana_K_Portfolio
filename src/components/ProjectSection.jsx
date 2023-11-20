import React from 'react';
import { Link } from 'react-router-dom';
import finDo from '../img/Fin/1.png';
import portland from '../img/Portland/Home page D.png';
import evelina from '../img/Evelina/home-page.png';
import glowYoga from '../img/Glow_yoga/hero.png';


const projects = [
  {
    projectId: '--fin-do',
    name: 'FIN.do',
    description: `Fin.do is a card-to-card money transfer\napp enabling you to send money instantly\nto more than 50 countries.`,
    link: 'work/fin-do',
    animationLeft: 'fadeInLeft',
    animationRight: 'fadeInRight',
    imgUrl: finDo,
    btnText: 'View project'
  },
  {
    projectId: '--glow-yoga',
    name: 'Glow Yoga',
    description: `Updating structure and website design\nfor yoga studio\n\nUX, UI design, Research,\nWireframing, Branding\n\nClient - Glow yoga, Brooklyn,NY`,
    link: 'work/glow-yoga',
    animationLeft: 'fadeInLeft',
    animationRight: 'fadeInRight',
    imgUrl: glowYoga,
    btnText: 'View project'
  },
  {
    projectId: '--evelina',
    name: 'Evelina  ',
    description: `Branding for the restaurant website\nUI design, Wireframing,\n Branding, Accessibility testing\nClient - Evelina Bk, NY`,
    link: 'work/evelina',
    animationLeft: 'fadeInLeft',
    animationRight: 'fadeInRight',
    imgUrl: evelina,
    btnText: 'View project'
  },
  {
    projectId: '--portland',
    name: 'Portland Electric',
    description: 'Responsive website design for a better\n user experience across devices.\n UX, UI design, Research, Wireframing,\n Branding, Usability testing, Prototyping\nClient - Portland Electric,OR\n',
    link: 'work/portland-electric',
    animationLeft: 'fadeInLeft',
    animationRight: 'fadeInRight',
    imgUrl: portland,
    btnText: 'Case Study'
  }
];

const renderProjects = () => {
  return projects.map((p, idx) => (
    <div key={idx} className={`jumbotron jumbotron${p.projectId} m-0 py-5`}>
      <div className="container">
        <div className="row text-center px-lg-4 px-xl-5">
          <div
            className="container__box col-sm-6 col-md-6 os-animation"
            data-animation="fadeInLeft"
          >
            <div className="feature px-2">
              <div className={`heading heading${p.projectId}`}>
                <h3 className="heading__text">{p.name}</h3>
                <div className="lead lead--end">
                  {p.description}
                </div>

                <Link
                  to={p.link}
                  type="button"
                  className="cta"
                  data-aos="fade-in"
                >
                  {p.btnText}
                </Link>
              </div>
            </div>
          </div>

          <div
            className="container__box col-sm-6 col-md-6 os-animation"
            data-animation="fadeInRight"
          >
            <img className="cover-img" src={p.imgUrl} alt="" />
          </div>
        </div>
      </div>
    </div>
  ))
}

const ProjectSection = () => {
  return (
    <div id="features" className="offset">
      {renderProjects()}
    </div>
  );
};

export default ProjectSection;
