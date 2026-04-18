import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
         <div className="contact-box">
  <h4>Start a Project</h4>
  <p style={{ marginTop: '10px', fontSize: '15px' }}>
    Got a requirement or looking to collaborate?<br />
    <a href="mailto:tabsaiyyad@gmail.com" style={{ textDecoration: 'underline', color: 'white', fontWeight: 'bold' }}>
      tabsaiyyad@gmail.com
    </a>
  </p>
</div>

<div className="contact-box">
  <h4>Social</h4>

  <a
    href="https://www.behance.net/taiyyabsaiyyad1"
    target="_blank"
    rel="noreferrer"
    className="contact-social"
  >
    Behance <MdArrowOutward />
  </a>

  <a
    href="https://www.linkedin.com/in/taiyyab-saiyyad-031887192/"
    target="_blank"
    rel="noreferrer"
    className="contact-social"
  >
    LinkedIn <MdArrowOutward />
  </a>

  <a
    href="https://www.instagram.com/gfxtab"
    target="_blank"
    rel="noreferrer"
    className="contact-social"
  >
    Instagram <MdArrowOutward />
  </a>
</div>

<div className="contact-box">
  <h2>
    Designed & Built by <br /> <span>GFXTAB</span>
  </h2>
  <h5>
    <MdCopyright /> 2026
  </h5>
</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
