import { IconTriangle } from '@tabler/icons';
import React from 'react';

import './carousel-arrows.styles.scss';

const CarouselArrowRight = ({ ...otherButtonProps }) => (
  <button {...otherButtonProps} className="btn-carousel btn-c-right">
    <IconTriangle fill='white' />
  </button>
);

const CarouselArrowLeft = ({ ...otherButtonProps }) => (
  <button {...otherButtonProps} className="btn-carousel btn-c-left">
    <IconTriangle fill='white' />
  </button>
);

export { CarouselArrowRight, CarouselArrowLeft };
