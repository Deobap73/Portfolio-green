// src/components/ProjectsTheFourthProject.jsx

import images from '../assets/imageIndex';
import ProjectsButton from './ProjectsButton';
import './ProjectsTheFourthProject.scss';

const ProjectsTheFourthProject = () => {
  return (
    <div className='projectsthefourthproject'>
      <img
        className='projectsthefourthproject-inner'
        alt='Image from an online shopping website'
        src={images.ImageGeneratorHome}
      />
      <img
        className='projectsthefourthproject-child'
        alt='Image from an online shopping website'
        src={images.ImageGeneratorLogIn}
      />
      <img
        className='projectsthefourthproject-item'
        alt='Image from an online shopping website and the Shopping car'
        src={images.ImageGeneratorGenerate}
      />
      <div className='projectsthefourthprojectdescri'>
        <h2 className='image-ai-generator1'>Image AI Generator Project</h2>
        <p className='one-project-allows-container'>
          <span className='one-project-allows'>
            One project allows users to generate images from text descriptions
            with AI-powered image generation using DALL-E.
          </span>
          <span className='one-project-allows'>&nbsp;</span>
          <span className='one-project-allows'>{`React, Node.js, Express, MongoDB, OpenAI DALL-E, Cloudinary, Figma and Photoshop were used. `}</span>
          <span className='one-project-allows'>&nbsp;</span>
          <span className='one-project-allows'>
            An interesting project where we can test our Full-Stack skills.
          </span>
        </p>
        <ProjectsButton
          urls={[
            'https://github.com/Deobap73/AI-image-generator-Client-Side',
            'https://github.com/Deobap73/AI-image-generator-Server-Side',
          ]}
        />
      </div>
    </div>
  );
};

export default ProjectsTheFourthProject;
