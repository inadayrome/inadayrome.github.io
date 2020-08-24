import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Project } from '../models/Project.interface';
import ProjectDetails from '../pages/projectDetails';

export const CoronaD3Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "corona-d3.png" }) {
        childImageSharp {
          fluid(maxWidth: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

const CoronaD3 = () => {
  const projectDetails: Project = {
    title: 'Corona-d3',
    codeURL: '',
    demoURL: '',
    previewImage: CoronaD3Image(),
    description: `On this project, I was responsible for the frontend implementation.\
The goal was to establish and visualize relations between potential Covid-related cases.

The initial implementation consisted of a web dashboard, done in Angular.\
Visualized links (as edges) between location/case nodes through force-directed graph in D3.
    `,
  };

  return <ProjectDetails project={projectDetails} />;
};

export default CoronaD3;
