import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Viral Reel Editing",
    category: "Instagram Growth Content",
    tools: "After Effects, Premiere Pro, Transitions, Sound Design",
    image: "/images/reel1.jpg",
    video: "/videos/reel1.mp4",
    link: "https://www.instagram.com/gfxtab",
  },
  {
    title: "Brand Identity Design",
    category: "Logo & Visual System",
    tools: "Illustrator, Photoshop, Typography, Branding",
    image: "/images/brand1.jpg",
    video: "/videos/brand1.mp4",
    link: "https://www.behance.net/taiyyabsaiyyad1",
  },
  {
    title: "Social Media Creatives",
    category: "High-Converting Posts",
    tools: "Photoshop, Canva, Content Strategy",
    image: "/images/social1.jpg",
    video: "/videos/social1.mp4",
    link: "https://www.instagram.com/gfxtab",
  },
  {
    title: "UI/UX Design",
    category: "Modern Web Experience",
    tools: "Figma, Wireframing, Prototyping",
    image: "/images/ui1.jpg",
    video: "/videos/ui1.mp4",
    link: "https://www.behance.net/taiyyabsaiyyad1",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Selected <span>Projects</span>
        </h2>
<p className="work-subtitle">
  Designs that don’t just look good, they perform.
</p>
        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Behance Portfolio Works</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
  image={project.image}
  video={project.video}
  alt={project.title}
  link={project.link}
/>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
