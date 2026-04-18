import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
  <h3>REELS & MOTION</h3>
  <h4>Scroll-Stopping Video Content</h4>
  <p>
    I create high-impact reels, transitions, and VFX-driven edits designed to
    grab attention and boost engagement across Instagram and social platforms.
  </p>
  <h5>Skillset & tools</h5>
  <div className="what-content-flex">
    <div className="what-tags">Midjourney</div>
    <div className="what-tags">ChatGPT</div>
    <div className="what-tags">Claude</div>
    <div className="what-tags">Antigravity</div>
    <div className="what-tags">After Effects</div>
    <div className="what-tags">Premiere Pro</div>
    <div className="what-tags">Transitions</div>
    <div className="what-tags">VFX Editing</div>
    <div className="what-tags">Sound Design</div>
    <div className="what-tags">Color Grading</div>
  </div>
  <div className="what-arrow"></div>
</div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
  <h3>BRANDING & UI</h3>
  <h4>Design That Converts</h4>
  <p>
    I design modern brand identities, social creatives, and UI experiences
    that not only look premium but drive real business results.
  </p>
  <h5>Skillset & tools</h5>
  <div className="what-content-flex">
    <div className="what-tags">Figma</div>
    <div className="what-tags">Photoshop</div>
    <div className="what-tags">Illustrator</div>
    <div className="what-tags">Brand Identity</div>
    <div className="what-tags">UI/UX Design</div>
    <div className="what-tags">Social Media Design</div>
  </div>
  <div className="what-arrow"></div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
