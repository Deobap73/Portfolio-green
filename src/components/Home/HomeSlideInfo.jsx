// src/components/HomeSlideInfo.jsx
import { useState, useEffect } from 'react';
import images from '../../assets/imageIndex';
import HomeImagesSlider from './HomeImagesSlider';
import './HomeSlideInfo.scss';

export default function HomeSlideInfo() {
  const containerStyles = {
    width: '746px',
    height: '386px',
    margin: '0 auto',
  };

  const {
    ImageGeneratorHome,
    ProjectAroundTheWorld,
    AthleteProfile,
    Project1Home,
  } = images;

  const slides = [
    ImageGeneratorHome,
    ProjectAroundTheWorld,
    AthleteProfile,
    Project1Home,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Advance to next slide
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slides every 5 seconds (5000 milliseconds)

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, [slides.length]); // Executes only once, when the component is mounted

  // Function to return information corresponding to the current slide
  const getSlideInfo = (index) => {
    switch (index) {
      case 0:
        return {
          sentence: 'The final project',
          title: 'ImageAIGenerator',
          description:
            'A project that allows users to generate images from text descriptions with AI-powered image generation using DALL-E.',
          tools: [
            { name: 'React', img: images.react },
            { name: 'NodeJS', img: images.node },
            { name: 'MongoDB', img: images.MongoDB },
            { name: 'Figma', img: images.figma },
          ],
        };
      case 1:
        return {
          sentence: 'Work in Team',
          title: 'Project Around The World',
          description:
            'Team project. On this site we tell through images our experience which enriches our lives, about this wonderful planet we live.',
          tools: [
            { name: 'React', img: images.react },
            { name: 'Scss', img: images.Sass },
            { name: 'Figma', img: images.figma },
            { name: 'Photoshop', img: images.photoshop },
          ],
        };
      case 2:
        return {
          sentence: 'In the Sport',
          title: 'Athlete Portfolio...  ',
          description:
            'This project showed me how much I like SCSS as a basis for style. An interesting project and once again focused on exploring what can be done with SCSS and not so much on the style itself',
          tools: [
            { name: 'HTML', img: images.html5 },
            { name: 'Scss', img: images.Sass },
            { name: 'Figma', img: images.figma },
          ],
        };
      case 3:
        return {
          sentence: 'The beginning',
          title: 'The project DBPoxy',
          description:
            'This was the first project was created to demonstrate the knowledge gained in the orientation course.',
          tools: [
            { name: 'HTML', img: images.html5 },
            { name: 'Css', img: images.css },
          ],
        };

      default:
        return {};
    }
  };

  const currentSlideInfo = getSlideInfo(currentIndex);

  return (
    <>
      <section className='slideContainer'>
        <div className='projecttitle'>
          <div className='verticalline'>
            <hr className='line' />
          </div>
          <h3>{currentSlideInfo.sentence}</h3>
          <h2>{currentSlideInfo.title}</h2>
        </div>
        <div style={containerStyles}>
          <HomeImagesSlider slides={slides} parentWidth={746} />
        </div>

        <div className='projectTools'>
          <p>{currentSlideInfo.description}</p>
          {currentSlideInfo.tools.map((tool, index) => (
            <h3 className='tools' key={index}>
              <img src={tool.img} alt={tool.name} /> {tool.name}
            </h3>
          ))}
          <div className='verticalline'>
            <hr className='line' />
          </div>
        </div>
      </section>
    </>
  );
}
