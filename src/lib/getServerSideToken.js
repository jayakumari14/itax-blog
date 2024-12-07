import { cookies } from 'next/headers';
import { verifyJwt } from './jwt';

// This function returns the token from cookie on the server
export const getServerSideToken = async () => {
  let cookieToken = cookies().get('token');

  let token = null;
  if (cookieToken && cookieToken.value) {
    token = cookieToken.value;
  }
  return token;
};

// This function returns the user object from token.
export const getUserOnServer = async () => {
  const cookieToken = await getServerSideToken();
  if (cookieToken) {
    const user = verifyJwt(cookieToken);
    return user;
  }
  return null;
};
