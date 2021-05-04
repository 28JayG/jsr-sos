export const needDirectionsFor = (service) => {
  switch (service) {
    case 'covid_testing':
    case 'other_lab_tests':
      return false;
    default:
      return true;
  }
};

export const checkPhoneNumberNotEmpty = (phone_number) =>
  phone_number.length > 0 && phone_number.every((number) => !!number);
