import React, { useState } from 'react';

import Layout from '../components/layout';
import Modal from '@mui/material/Modal';
import { ProjectList } from '../constants';

/**
 * This page contains lists of projects developed
 */
const Projects = () => {
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
      <h4 style={{ fontWeight: 'normal' }}>Portfolio</h4>
      <div className="pages-projects-container">
        {projectList.map<JSX.Element>((project, index) => (
          <div
            className="pages-projects-image-container"
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
