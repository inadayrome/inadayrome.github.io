import React from 'react';
import { Link } from 'gatsby';
import Button from '@mui/material/Button';

// import Layout from '../components/layout';

/**
 * Bio/Intro page
 */
const About = () => {

  return (
    <div className="pages-about-container">
      {/* <h2 className={classes.aboutText}>Wen Jun Lee</h2> */}
      <h4 className="pages-about-text">
        Software Engineer based in Singapore
      </h4>
      <h4 className="pages-about-text">
        Full Stack Development &#183; Web Data Visualization
      </h4>
      <Link
        to="/projects"
        className="pages-about-container pages-about-text"
      >
        <Button variant="contained">View Projects</Button>
      </Link>
    </div>
  );
};

export default About;
