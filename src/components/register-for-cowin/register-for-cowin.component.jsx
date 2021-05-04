import React from 'react';
import { ExternalLinks } from '../../constants/routes';

import './register-for-cowin.styles.scss';

const RegisterForCowin = () => {
  return (
    <a href={ExternalLinks.COWIN_REGISTER_LINK} className="rfc-button">
      Register for COWIN
    </a>
  );
};

export default RegisterForCowin;
