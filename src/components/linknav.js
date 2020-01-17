import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Tab from '@material-ui/core/Tab';

const LinkMenuItem = ({ to, children, ...rest }) => (
  <Tab  component={Link} to={to} {...rest}>
    {children}
  </Tab>
);

LinkMenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default LinkMenuItem;
