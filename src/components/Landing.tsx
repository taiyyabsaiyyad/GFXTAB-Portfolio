import { PropsWithChildren, useState, useEffect } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 6) {
          clearInterval(interval);
          return 6;
        }
        return prev + 1;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">

        <div className="landing-intro">
          <h2>Hello! I'm</h2>
          <h1 className="landing-shining-text">GFXTAB</h1>
        </div>

        <div className="landing-info">
          <h3>Visual Designer &</h3>

          <h2 className="landing-info-h2">
            <div className="landing-h2-1">Creative</div>
            <div className="landing-h2-2">Experience</div>
          </h2>

          <h2>
            <div className="landing-h2-info">{count}+ Years</div>
            <div className="landing-h2-info-1">Design</div>
          </h2>
        </div>

      </div>

      {children}
    </div>
  );
};

export default Landing;