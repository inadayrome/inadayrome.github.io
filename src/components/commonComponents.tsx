import React from 'react';
import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { LINKEDIN_URL, GITHUB_URL } from '../constants';

export const LinkButtons = () => (
  <div>
    <a href={LINKEDIN_URL}>
      <IconButton title="Connect on LinkedIn" style={{ padding: '5px' }}>
        <LinkedInIcon />
      </IconButton>
    </a>
    <a href={GITHUB_URL}>
      <IconButton title="View Github Repository" style={{ padding: '5px' }}>
        <GitHubIcon />
      </IconButton>
    </a>
  </div>
);
