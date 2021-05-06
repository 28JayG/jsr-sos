import { Carousel } from 'react-responsive-carousel';
import {
  CarouselArrowLeft,
  CarouselArrowRight,
} from '../carousel-arrows/carousel-arrows.component';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // carousel css

const CustomCarousel = ({ children }) => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      swipeable
      interval={3000}
      showStatus={false}
      showIndicators={false}
      //right arrow
      renderArrowNext={(onClickHandler, _, label) => (
        <CarouselArrowRight
          onClick={onClickHandler}
          title={label}
          type="button"
        />
      )}
      //left arrow
      renderArrowPrev={(onClickHandler, _, label) => (
        <CarouselArrowLeft
          onClick={onClickHandler}
          title={label}
          type="button"
        />
      )}
    >
      {children}
    </Carousel>
  );
};

export default CustomCarousel;
