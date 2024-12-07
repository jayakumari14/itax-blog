import { nodeAxios } from '@/lib/axios';
import { cookies } from 'next/headers';

export function getCurrentUser() {
  const cookieList = cookies();

  if (cookieList) {
    const token = cookieList.get('token')?.value || '{}';
    const user = JSON.parse(cookieList.get('currentUser')?.value || '{}');
    return {
      token,
      ...user,
    };
  }
}
export async function getBusinessProfile() {
  const { token } = await getCurrentUser();
  try {
    const { data } = await nodeAxios.get('/business/profile', {
      headers: {
        authorization: 'Bearer ' + token,
      },
    });
    return { response: data };
  } catch (error) {
    console.log('🚀 ~ getBusinessProfile ~ error:', error);
    return { error: error };
  }
}
export async function getUserProfile() {
  const { token } = await getCurrentUser();
  try {
    const response = await nodeAxios.get('/user/profile', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    return { response: response.data };
  } catch (error) {
    return { error: error };
  }
}
