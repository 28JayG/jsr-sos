import React from 'react';

import { IconArrowLeft } from '@tabler/icons';

import './appbar.styles.scss';
import { withRouter } from 'react-router';

const AppBar = ({ title, subPage, history }) => {
  const goBack = () => history.goBack(); //back button action

  return (
    <div className="app-bar-wrapper">
      <div className="app-bar">
        {/* TODO add hamburger in next version */}
        {subPage ? (
          <IconArrowLeft onClick={goBack} size={24} className="back-btn-ab" />
        ) : (
          ''
        )}
        <p className="title-ab">{title}</p>
      </div>
    </div>
  );
};

export default withRouter(AppBar);
