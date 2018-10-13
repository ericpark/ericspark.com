import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import Image from 'gatsby-image';
import { Box } from 'grid-emotion';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import config from '../../config/website';


const Hero = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  .gatsby-image-outer-wrapper {
    position: static !important;
    > div {
      position: static !important;
    }
  }
`;

const Wrapper = styled(Box)`
  max-width: ${props => props.theme.maxWidth};
`;

const TitleWrapper = styled(Box)`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${props => props.theme.colors.bg};
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.text};
  max-width: ${props => props.theme.maxWidthText};
  text-align: center;
  margin: 0 auto;
  padding: 0 32px;
`;

const Short = styled.h3`
  color: ${props => props.theme.colors.text};
  max-width: ${props => props.theme.maxWidthText};
  margin: 0 auto;
  text-align: center;
`;

const Details = styled.main`
  margin-top: 9rem;
  margin-bottom: 9rem;
  p {
    text-align: justify;
  }
  p,
  ul,
  ol,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  blockquote {
    max-width: ${props => props.theme.maxWidthText};
    margin-left: auto;
    margin-right: auto;
  }
  li {
    margin-left: 1.45rem;
  }
  .block-img {
    max-width: 100%;
    margin-top: 6rem;
    margin-bottom: 6rem;
    text-align: center;
  }
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    margin-top: 6rem;
    margin-bottom: 6rem;
    .block-img {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
  }
`;

const ProjectTemplate = ({ data: { prismicProject: projectNode } }) => {
  const { data } = projectNode;
  return (
    <Layout>
      <Helmet title={`${data.title.text} | ${config.siteTitle}`} />
      <SEO projectNode={projectNode} projectPath={projectNode.uid} projectSEO />
      <Hero>
        <Image sizes={data.project_image.localFile.childImageSharp.sizes} />
        <TitleWrapper py={4}>
          <Title>{data.title.text}</Title>
        </TitleWrapper>
      </Hero>
      <Wrapper py={4} px={4} mx="auto">
        
{/*CHANGE subtitle to short*/}
        <Short>{data.short.text}</Short>
        <Details dangerouslySetInnerHTML={{ __html: data.details.html }} />
      </Wrapper>
      <Footer isProject />
    </Layout>
  );
};

export default ProjectTemplate;

ProjectTemplate.propTypes = {
  data: PropTypes.shape({
    prismicProject: PropTypes.object.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query ProjectBySlug($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
      data {
        project_image {
          localFile {
            childImageSharp {
              sizes(maxWidth: 1024, quality: 90, traceSVG: { color: "#021212" }) {
                ...GatsbyImageSharpSizes_withWebp_tracedSVG
              }
              resize(width: 800) {
                src
              }
            }
          }
        }
        date 
        title {
          text
        }
        short {
          text
        }
        details {
          html
        }
      }
    }
  }
`;
