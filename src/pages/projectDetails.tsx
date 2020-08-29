import React from 'react';
import { Project } from '../models/Project.interface';
import { makeStyles, createStyles, Button, Theme } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { lightTheme } from '../constants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 450px)',
      maxWidth: '900px',
      [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: 'minmax(300px, 450px)',
        maxWidth: '450px',
      },
      background: lightTheme.secondaryBackground,
      position: 'absolute',
      minHeight: '30vh',
      left: '0',
      right: '0',
      margin: '10vh auto',
    },
    detailsContainer: {
      display: 'grid',
      gridTemplateRows: 'auto auto 1fr auto',
      '& > h3, h6': {
        color: lightTheme.headerText,
        textDecoration: 'none',
        fontWeight: 'normal',
        margin: '0 5px 0.5em',
      },
      '& > h6': {
        color: lightTheme.secondaryText,
        fontWeight: '600',
      },
      '& > h3': {
        color: lightTheme.headerText,
        [theme.breakpoints.down('sm')]: {
          marginTop: '0.5em',
        },
      },
    },
    description: {
      background: lightTheme.tertiaryBackground,
      overflow: 'auto',
      whiteSpace: 'pre-wrap',
      fontSize: '0.8em',
      fontFamily: 'inherit',
      padding: '5px',
      color: lightTheme.headerText,
    },
    button: {
      margin: '5px',
      fontSize: '0.75em',
    },
  })
);

const ProjectDetails: React.FC<{ project: Project }> = props => {
  const classes = useStyles();
  const { project } = props;
  const { title, codeURL, demoURL, previewImage, description } = project;

  return (
    <div className={classes.mainContainer}>
      {previewImage()}
      <div className={classes.detailsContainer}>
        <h3>{title}</h3>
        <h6>About</h6>
        <div className={classes.description}>{description}</div>
        <div>
          <Button
            className={classes.button}
            size="small"
            variant="contained"
            disabled={!!!codeURL}
            href={codeURL}
          >
            <CodeIcon fontSize="inherit" />
            &nbsp;{codeURL ? 'Code' : 'Private'}
          </Button>
          <Button
            className={classes.button}
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
