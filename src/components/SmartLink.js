// components/SmartLink.jsx
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Si la URL empieza con “/” se asume interna y usa <Link>.
 * De lo contrario se abre como <a target="_blank">.
 */
const SmartLink = ({ href, children, ...rest }) => {
  const esInterno = href.startsWith('/');

  return esInterno ? (
    <Link to={href} {...rest}>
      {children}
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
};

export default SmartLink;
