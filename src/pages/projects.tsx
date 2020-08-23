import React, { useState } from 'react';
// import { PageProps, Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import { makeStyles, createStyles, Modal } from '@material-ui/core';
import { ProjectList } from '../constants';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 500px))',
    },
  })
);

/**
 * This page contains lists of projects developed
 */
const Projects = () => {
  const classes = useStyles();
  /**
   * Index of project (in ProjectList) opened in modal
   */
  const [projectIndex, setProjectIndex] = useState(-1);
  const projectList = ProjectList;

  const showModal = projectIndex < projectList.length && projectIndex >= 0;

  return (
    <Layout>
      <h3 style={{ fontWeight: 'normal' }}>Portfolio</h3>
      <div className={classes.container}>
        {projectList.map<JSX.Element>((project, index) => (
          <React.Fragment key={index}>{project.image()}</React.Fragment>
        ))}
      </div>
      {showModal && (
        <Modal open={showModal} onClose={() => setProjectIndex(-1)}>
          {projectList[projectIndex] && projectList[projectIndex].project()}
        </Modal>
      )}
    </Layout>
  );
};

export default Projects;
