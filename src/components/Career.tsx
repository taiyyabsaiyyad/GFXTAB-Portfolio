import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Career.css";

gsap.registerPlugin(ScrollTrigger);

const Career = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".career-info-box").forEach((box: any) => {
        gsap.fromTo(
          box,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: box,
              start: "top 85%",
              end: "top 50%",
              scrub: true,
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="career-section section-container">

      <div className="career-container">
        <h2>
          My <span>Journey</span>
        </h2>

        <div className="career-info">
          <h3 style={{color: "white", marginBottom: "20px", marginTop: "30px", opacity: 0.7, letterSpacing: "2px", textTransform: "uppercase"}}>Experience</h3>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Brand & Business Developer</h4>
                <h5>GFXTAB</h5>
              </div>
              <h3>2026–Now</h3>
            </div>
            <p>
              Full-time · Driving branding strategies, visual identities, and business development initiatives.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Creative Director</h4>
                <h5>HyStez</h5>
              </div>
              <h3>Jan 2026–Mar 2026</h3>
            </div>
            <p>
              Full-time · Mumbai Metropolitan Region (On-site) · Art Direction and high-level visual strategies. Also worked as Sr. Visual Designer from Apr 2025 to Jan 2026 (Remote).
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Graphic Designer</h4>
                <h5>WOOT Factor Brand Architects</h5>
              </div>
              <h3>Dec 2020–Mar 2025</h3>
            </div>
            <p>
              Full-time · Chembur (On-site) · Designed high-impact creatives over a span of 4+ years.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Fabricator</h4>
                <h5>Mazagaon Dock Limited</h5>
              </div>
              <h3>Oct 2016–Oct 2020</h3>
            </div>
            <p>
              Dockyard, Mumbai · Specialized in machining, metal fabrication, and 6+ related skills.
            </p>
          </div>

          <h3 style={{color: "white", marginBottom: "20px", marginTop: "40px", opacity: 0.7, letterSpacing: "2px", textTransform: "uppercase"}}>Education</h3>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>VFX and Animation</h4>
                <h5>Arena Animation</h5>
              </div>
              <h3>Mar 2020–Aug 2024</h3>
            </div>
            <p>
              Grade: Distinction · Arts, Entertainment, and Media Management. Skills: Video Editing, Video Production, and 8+ skills.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma of Education</h4>
                <h5>KJ Somaiya College of Engineering</h5>
              </div>
              <h3>May 2016–Oct 2016</h3>
            </div>
            <p>
              Grade: Distinction · Welding Technology / Welder. Skills: MIG Welding, TIG Welding, and 6+ skills.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma of Education</h4>
                <h5>Vighnahartha Trusts Shivajirao Col...</h5>
              </div>
              <h3>Jul 2015–Mar 2016</h3>
            </div>
            <p>
              Information Technology. Skills: HTML, Java, and 4+ skills.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Career;