export const ErrorMessages = {
  LOGIN_ERROR: "You must login to access that resource.",
  AUTHORIZATION_ERROR: "You are not authorized to access that resource.",
  SUSPENSION_ERROR: "Your account has been suspended"
};

export const errorsContainUserSuspension = (errorsList = []) => {
  return errorsList.some(
    ({ message }) => message === ErrorMessages.SUSPENSION_ERROR
  );
};
