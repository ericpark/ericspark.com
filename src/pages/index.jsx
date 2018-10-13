import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'react-emotion';
import { Flex } from 'grid-emotion';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import GridItem from '../components/GridItem';
//import BeTheHero from '../images/be_the_hero.svg';
//import DataReport from '../images/data_report.svg';
//import MayTheForce from '../images/may_the_force.svg';
import logo from '../../static/logos/logo.svg';
import Typing from 'react-typing-animation';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

const HeaderHome = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 1.75rem;
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    height: 100vh;
  }
`;

const Header = styled.header`
  width: 100%;
  height: 900px;
  position: absolute;
  padding: 1.75rem;
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    height: 700px;
  }
`;

const Logo = styled.h2`
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    margin-top: 0rem;
    margin-bottom: 0rem;
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
  }
    @media (max-width: ${props => props.theme.breakpoint.s}) {
    margin-top: 0rem;
    margin-bottom: 0rem;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
  }
`;

const Hero = styled(Flex)`
  height: 100%;
  text-align: center;
  h1 {
    letter-spacing: 0.2rem;
    line-height: 4.5rem;
  }
  h3 {
    font-family: ${props => props.theme.fontFamily.body};
    margin-top: 2rem;
    font-size: 1.85rem;
    font-weight: 400;
  }
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    h1 {
      line-height: 3.5rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    h1 {
      line-height: 2.5rem;
    }
    h3 {
      font-size: 1.3rem;
    }
  }
  @media (max-width: ${props => props.theme.breakpoint.xs}) {
    h1 {
      line-height: 1.8rem;
      font-size: 1.3rem;
    }
    h3 {
      font-size: 0.8rem;
    }
  }
`;

const Wrapper = styled(Flex)`
  max-width: ${props => props.theme.maxWidth};
`;

const PrimaryBG = styled.section`
  background: ${props => props.theme.colors.primaryDark};
  color: ${props => props.theme.colors.textInvert};
  h1,
  h2,
  h3,
  h4 {
    color: ${props => props.theme.colors.textInvert};
  }
`;

const ServiceImage = styled.div`
  flex-basis: calc(99.9% * 4 / 7 - 5rem);
  max-width: calc(99.9% * 4 / 7 - 5rem);
  width: calc(99.9% * 4 / 7 - 5rem);
  text-align: center;
  img {
    width: 90%;
    margin-bottom: 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    img {
      width: 50%;
    }
  }
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    img {
      width: 75%;
    }
  }
`;

const ServiceText = styled.div`
  flex-basis: calc(99.9% * 3 / 7 - 5rem);
  max-width: calc(99.9% * 3 / 7 - 5rem);
  width: calc(99.9% * 3 / 7 - 5rem);
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }
  ol,
  ul {
    list-style: none;
    margin-left: 0;
  }
  li:before {
    content: '－';
    padding-right: 8px;
  }
`;

const Contact = styled(Wrapper)`
  margin: 0 auto;
  h1,
  h2,
  h3 {
    color: ${props => props.theme.colors.text};
  }
  h3 {
    font-family: ${props => props.theme.fontFamily.body};
    margin-top: 1rem;
    font-size: 1.85rem;
    font-weight: 400;
  }
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    font-size: 1.5rem;
  }
`;

const IndexPage = ({
  data: {
    project: { edges },
  },
}) => (
  <Layout>
    <HeaderHome>
      <Logo>
        <img src={logo} height="60px" alt="logo" />
        {/* Todo: Make this with padding*/}
      </Logo>
      <Hero justifyContent="center" alignItems="center" flexDirection="column">
        <h1>
          Always searching for <br /> the better way
        </h1>
        <h3>Hi, I'm Eric and i'm building solutions that automate the boring stuff.</h3>
        <h3>
          <Typing>
            <span id="text">Check out my <u><b><a href="#projects">projects</a></b></u>. ✌️</span>
            <br/>
            <span id="text">Sometimes I write in my <u><b><a href="/blog">blog</a></b></u>. 🤓</span>
          </Typing>
        </h3>
      </Hero>
    </HeaderHome>
    <section id="projects">
      <Wrapper p={4-4} mb={[4, 4, 7]} mx="auto" justifyContent="space-between" flexWrap="wrap">
        {edges.map(c => (
          <GridItem
            uid={c.node.uid}
            key={c.node.uid}
            sizes={c.node.data.project_image.localFile.childImageSharp.sizes}
            alt={c.node.data.title.text}
            title={c.node.data.title.text}
            short={c.node.data.short.text}
          />
        ))}
      </Wrapper>
    </section>
  {/*
    <PrimaryBG>
      <Wrapper flexDirection="column" p={4} mx="auto">
        <Flex w={1} py={5} justifyContent="space-between" flexWrap="wrap">
          <ServiceImage>
            <img src={BeTheHero} alt="Be The Hero" />
          </ServiceImage>
          <ServiceText>
            <h2>Be your own hero</h2>
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
              ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is
              a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>
            <ul>
              <li>Service Super</li>
              <li>Great Offer</li>
              <li>Item Wrap</li>
            </ul>
          </ServiceText>
        </Flex>
        <Flex w={1} py={5} justifyContent="space-between" flexDirection="row-reverse" flexWrap="wrap">
          <ServiceImage>
            <img src={DataReport} alt="Data Report" />
          </ServiceImage>
          <ServiceText>
            <h2>We love charts!</h2>
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
              ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </p>
            <ul>
              <li>Service Super</li>
              <li>Great Offer</li>
              <li>Item Wrap</li>
            </ul>
          </ServiceText>
        </Flex>
        <Flex w={1} py={5} justifyContent="space-between" flexWrap="wrap">
          <ServiceImage>
            <img src={MayTheForce} alt="May the Force" />
          </ServiceImage>
          <ServiceText>
            <h2>May the force be with you</h2>
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
              ocean.
            </p>
            <ul>
              <li>Service Super</li>
              <li>Great Offer</li>
            </ul>
          </ServiceText>
        </Flex>
      </Wrapper>
    </PrimaryBG>
  */}
    <Contact px={4} py={6} justifyContent="center" alignItems="center" flexDirection="column">
      <h3>Contact:</h3>
      <h4>eric@ericspark.com</h4>
    </Contact>
    <Footer />
  </Layout>
);

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    project: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    project: allPrismicProject(sort: { fields: [last_publication_date], order: DESC }) {
      edges {
        node {
          uid
          data {
            project_image {
              localFile {
                childImageSharp {
                  sizes(
                    maxWidth: 900
                    maxHeight: 900
                    quality: 90
                    traceSVG: { color: "#021212" }
                    cropFocus: ENTROPY
                  ) {
                    ...GatsbyImageSharpSizes_withWebp_tracedSVG
                  }
                }
              }
            }
            title {
              text
            }
            short {
              text
            }
          }
        }
      }
    }
  }
`;
