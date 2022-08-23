import { FaGithub, FaLinkedin } from "react-icons/fa";

import './Homepage.css';

function Homepage() {
  return (
    <section className="homepage">
      
      <div className="overlay">
        <h1>Nayeem miah</h1>
        <p>Front- end Web Developer</p>

        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/nayeem-islam-237aa0220/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nayeemislam5031"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Homepage