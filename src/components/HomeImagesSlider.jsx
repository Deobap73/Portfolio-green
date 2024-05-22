// src/components/HomeImagesSlider.jsx
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './HomeImagesSlider.scss';

export default function HomeImagesSlider({ slides, parentWidth = 746 }) {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (currentIndex === slides.length - 1) {
        // Last slide reached, restart to first slide
        setCurrentIndex(0);
      } else {
        // Advance to the next slide
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 5000); // Transition time between slides

    return () => clearInterval(timerRef.current);
  }, [currentIndex, slides.length]);

  return (
    <div className='slider'>
      <div className='slides-container-overflow'>
        <div
          className='slides-container'
          style={{
            width: `${parentWidth * slides.length}px`,
            transform: `translateX(-${currentIndex * parentWidth}px)`,
            transition: 'transform 2s ease-in-out', // Transition time between slides
          }}>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className='slide'
              style={{
                backgroundImage: `url(${slide})`,
                width: `${parentWidth}px`,
              }}
              onClick={() => goToSlide(slideIndex)}></div>
          ))}
        </div>
      </div>
      <div className='dots-container'>
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`dot ${slideIndex === currentIndex ? 'dot-active' : ''}`}
            onClick={() => goToSlide(slideIndex)}></div>
        ))}
      </div>
    </div>
  );
}

HomeImagesSlider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
  parentWidth: PropTypes.number,
};
