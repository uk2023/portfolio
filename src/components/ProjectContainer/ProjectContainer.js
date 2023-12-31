import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import uniqid from 'uniqid';
import './ProjectContainer.css';

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='source code'
        className='link link--icon'
      >
        <FaGithub />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='live preview'
        className='link link--icon'
      >
        <FaExternalLinkAlt />
      </a>
    )}
  </div>
);

export default ProjectContainer;
