import {
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";

import myPhoto from "./myphoto.png";

export default function VisitingCard() {
  return (
    <div className="card-container">
      <div className="card">

        <div className="profile">
          <img src={myPhoto} alt="Prateek Rajbhar" />
        </div>

        <h1>Er. Prateek Rajbhar</h1>
        <p className="role">Software Developer</p>

        <div className="skills">
  <span>Problem Solving</span>
  <span>Cloud Deployment</span>
  <span>Web Development</span>
  <span>Software Engineering</span>
</div>

        <div className="info">
          <a href="tel:+919598976334">
            <FaPhone />
            <span>9598976334</span>
          </a>

          <a href="mailto:prateekrajbhar3311@gmail.com">
            <FaEnvelope />
            <span>Email Me</span>
          </a>
        </div>

        <div className="buttons">
          <a
            href="https://simple-e-commerce-website-tan.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <FaGlobe />
          </a>

          <a
            href="https://github.com/PRATEEKRAJBHAR"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/prateek-rajbhar-820010248"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.google.com/maps/place/Ramabai+Ambedkar+Nagar,+Mumbai,+Maharashtra"
            target="_blank"
            rel="noreferrer"
          >
            <FaMapMarkerAlt />
          </a>
        </div>

      </div>
    </div>
  );
}