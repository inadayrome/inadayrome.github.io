import React from 'react';
import { Project } from '../models/Project.interface';
import { Button } from '@mui/material';
import {
  Code as CodeIcon,
  Visibility as VisibilityIcon,
} from '@mui/icons-material';

const ProjectDetails: React.FC<{ project: Project }> = props => {
  const { project } = props;
  const { title, codeURL, demoURL, previewImage, description } = project;

  return (
    <div className="projectDetails-main-container">
      {previewImage()}
      <div className="projectDetails-container">
        <h4>{title}</h4>
        <h6>About</h6>
        <div className="projectDetails-description">{description}</div>
        <div>
          <Button
            className="projectDetails-button"
            size="small"
            variant="contained"
            disabled={!!!codeURL}
            href={codeURL}
          >
            <CodeIcon fontSize="inherit" />
            &nbsp;{codeURL ? 'Code' : 'Private'}
          </Button>
          <Button
            className="projectDetails-button"
            size="small"
            variant="contained"
            disabled={!!!demoURL}
            href={demoURL}
          >
            <VisibilityIcon fontSize="inherit" />
            &nbsp;{demoURL ? 'Demo' : 'Private'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
