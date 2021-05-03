// in-app routes
export const InternalRoutes = {
  HOME: '/',
  DOCTOR: '/doctors',
  FAQS: '/faqs',
  HELPLINE: '/helpline',
};

//routes or links external to the app
export const ExternalLinks = {
  PLASMA_DONATE_FORM_LINK: '#',
};

//routes for bottom nav
export const bottomNavRoutes = {
  home: {
    title: 'home',
    iconName: '',
    route: InternalRoutes.HOME,
  },
  doctor: {
    title: 'doctor',
    iconName: '',
    route: InternalRoutes.DOCTOR,
  },
  faqs: {
    title: 'faqs',
    iconName: '',
    route: InternalRoutes.FAQS,
  },
  helpline: {
    title: 'helpline',
    iconName: '',
    route: InternalRoutes.HELPLINE,
  },
};
