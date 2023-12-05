import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { about } from '../../portfolio';
import './About.css';
import IMG1 from '../../assets/1.png';
import RESUME_PDF from '../../assets/Resume-Ujjwal-Kumar.pdf'; // Replace with the actual path

const About = () => {
  const { name, role, description, social } = about;

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}</span>
          <img src={IMG1} alt="LOGO" className="about__image" />
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {RESUME_PDF && (
          <a href={RESUME_PDF} download>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <FaGithub />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <FaLinkedin />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
