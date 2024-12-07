import { generateErrorMessage } from 'zod-error';

const options = {
  delimiter: {
    component: ' - ',
  },
  code: {
    enabled: false,
  },
  path: {
    enabled: true,
    transform: ({ label, value }) => `${label}${value}`,
  },
  transform: ({ errorMessage, index }) =>
    `🔑 Error #${index + 1}: ${errorMessage}`,
};

export const formatErrorMessage = (error) => {
  const message = generateErrorMessage(error.issues, options);
  return message;
};
