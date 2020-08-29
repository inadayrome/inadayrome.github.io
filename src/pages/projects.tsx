import React, { useState } from 'react';

import Layout from '../components/layout';
import { makeStyles, createStyles, Modal } from '@material-ui/core';
import { ProjectList, lightTheme } from '../constants';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 450px))',
      gap: '10px',
      justifyContent: 'space-around',
    },
    imageContainer: {
      cursor: 'pointer',
      border: `1px solid ${lightTheme.secondaryBackground}`,
      boxShadow: `3px 3px 3px 3px ${lightTheme.tertiaryBackground}`,
      borderRadius: '7px',
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

  const ModalProject = () => {
    const item = projectList[projectIndex];
    if (!item?.project) return null;

    return item.project();
  };

  return (
    <Layout>
      <h3 style={{ fontWeight: 'normal' }}>Portfolio</h3>
      <div className={classes.container}>
        {projectList.map<JSX.Element>((project, index) => (
          <div
            className={classes.imageContainer}
            key={index}
            title="View Project"
            onClick={() => setProjectIndex(index)}
          >
            {project.image()}
          </div>
        ))}
      </div>
      {showModal && !!ModalProject() && (
        <Modal open={showModal} onClose={() => setProjectIndex(-1)}>
          {ModalProject() as JSX.Element}
        </Modal>
      )}
    </Layout>
  );
};

export default Projects;
