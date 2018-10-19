import React from 'react';
import { Link } from 'react-router-dom';
import NavLinkWithProp from 'nav-link-with-prop';

function asNavLink({ activeProp = 'active' } = {}) {
  return T => ({ children, ...props }) => (
    <NavLinkWithProp {...props} activeProp={activeProp}>
      {innerProps => <T as={Link} {...innerProps}>{children}</T>}
    </NavLinkWithProp>
  );
}

export default asNavLink;
