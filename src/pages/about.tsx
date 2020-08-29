import React from 'react';
import { Link } from 'gatsby';
import { Button, createStyles, makeStyles } from '@material-ui/core';

// import Layout from '../components/layout';
const useStyles = makeStyles(() =>
  createStyles({
    container: {
      textAlign: 'center',
      marginTop: '20vh',
    },
    aboutText: {
      fontWeight: 'normal',
    },
    projectLink: {
      textDecoration: 'none',
    },
  })
);
/**
 * Bio/Intro page
 */
const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.aboutText}>Wen Jun Lee</h1>
      <h3 className={classes.aboutText}>
        Software Engineer based in Singapore
      </h3>
      <h3 className={classes.aboutText}>
        Full Stack Development &#183; Web Data Visualization
      </h3>
      <Link
        to="/projects"
        className={`${classes.projectLink} ${classes.aboutText}`}
      >
        <Button variant="contained">View Projects</Button>
      </Link>
    </div>
  );
};

export default About;
