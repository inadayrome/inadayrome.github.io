import React from 'react';
import { Project } from '../models/Project.interface';
import { makeStyles, createStyles, Link } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles(() =>
  createStyles({
    mainContainer: {
      display: 'grid',
      gridTemplateColumns: '50% 50%',
    },
  })
);

const ProjectDetails: React.FC<{ project: Project }> = props => {
  const classes = useStyles();
  const { project } = props;
  const { title, codeURL, demoURL, previewImage, description } = project;

  return (
    <div className={classes.mainContainer}>
      {previewImage}
      <div>
        <h3>{title}</h3>
        <h6>About</h6>
        <div>{description}</div>
        <Link component="button" disabled={!!!codeURL} href={codeURL}>
          <CodeIcon /> Code
        </Link>
        <Link component="button" disabled={!!!demoURL} href={demoURL}>
          <VisibilityIcon /> Demo
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
