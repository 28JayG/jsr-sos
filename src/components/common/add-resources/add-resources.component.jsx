import React from 'react';
import { ExternalLinks } from '../../../constants/routes';

import BannerCallToAction from '../banner-call-to-action/banner-call-to-action.component';

import './add-resources.styles.scss';

const AddResources = () => {
  return (
    <div className="banner-ar">
      <p className="text-ar">If you have resources please add</p>
      <a
        href={ExternalLinks.ADD_RESOURCES_FORM_LINK}
        target="_blank"
        rel="noreferrer"
      >
        <BannerCallToAction>Add Resources</BannerCallToAction>
      </a>
    </div>
  );
};

export default AddResources;
