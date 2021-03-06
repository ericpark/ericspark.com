import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import { Flex } from 'grid-emotion';

const Wrapper = styled.navbar`
  background: ${props => props.theme.colors.greyDark};
  color: ${props => props.theme.colors.greyLight};
  a {
    color: ${props => props.theme.colors.bg};
    &:hover {
      color: ${props => props.theme.colors.primaryLight};
    }
  }
`;

const Inner = styled(Flex)`
  @media (max-width: ${props => props.theme.breakpoint.l}) {
    justify-content: center;
    flex-direction: column;
    text-align: center;
    div:last-child {
      margin-top: 1rem;
    }
  }
`;

const StyledLink = styled(Link)`
  transform: translateX(0);
  transition: all 200ms ease-out;
  &:before {
    content: '←';
    padding-right: 8px;
  }
  &:hover {
    color: ${props => props.theme.colors.bg};
    transform: translateX(-6px);
  }
`;

const NavBar = ({ isProject }) => {
  const year = new Date().getFullYear();
  return (
    <Wrapper>
      <Inner justifyContent="space-between" p={4}>
        {isProject ? (
          <React.Fragment>
            <StyledLink to="/">Return to home</StyledLink>
            <div>Contact Us</div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div><a href="#">Github</a> &mdash; <a href="#">Linkedin</a> &mdash; <a href="#">Twitter</a></div>
          </React.Fragment>
        )}
      </Inner>
    </Wrapper>
  );
};

export default NavBar;

NavBar.propTypes = {
  isProject: PropTypes.bool,
};

NavBar.defaultProps = {
  isProject: false,
};
