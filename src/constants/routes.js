import {
  IconHome2,
  IconPhone,
  IconQuestionMark,
  IconStethoscope,
} from '@tabler/icons';

// in-app routes
export const InternalRoutes = {
  HOME: '/',
  DOCTOR: '/doctors',
  FAQS: '/faqs',
  HELPLINE: '/helplines',
  SERVICES: '/services',
};

//routes or links external to the app
export const ExternalLinks = {
  PLASMA_DONATE_FORM_LINK: '#',
  HELPLINE_NUMBER: '06572221717',
  COWIN_REGISTER_LINK: ' https://www.cowin.gov.in/home',
};

//external assets links
export const ImagesLinks = {
  PLASMA_DONATE_IMAGE_URL: 'https://i.ibb.co/tb5rwDD/Home-banner.png',
  VACCINE_IMAGE_URL: 'https://i.ibb.co/m8swsgj/Vaccination-bannar.png',
};

const navIconStyles = { stroke: 1 };

//routes for bottom nav
export const bottomNavRoutes = {
  home: {
    title: 'home',
    icon: () => <IconHome2 {...navIconStyles} />,
    route: InternalRoutes.HOME,
  },
  doctor: {
    title: 'doctor',
    icon: () => <IconStethoscope {...navIconStyles} />,
    route: InternalRoutes.DOCTOR,
  },
  faqs: {
    title: 'faqs',
    icon: () => <IconQuestionMark {...navIconStyles} />,
    route: InternalRoutes.FAQS,
  },
  helpline: {
    title: 'helpline',
    icon: () => <IconPhone {...navIconStyles} />,
    route: InternalRoutes.HELPLINE,
  },
};
