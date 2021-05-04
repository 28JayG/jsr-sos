export const needDirectionsFor = (service) => {
  switch (service) {
    case 'covid_testing':
    case 'other_lab_tests':
      return false;
    default:
      return true;
  }
};
