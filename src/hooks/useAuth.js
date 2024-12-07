'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import useClient from './useClient';
import { getCookie, deleteCookie } from 'cookies-next';

export default function UseAuth() {
  const router = useRouter();

  //   const currentUser = {
  //     token: useClient(() => getCookie("token")),
  //     user: useClient(() => JSON.parse(getCookie("currentUser") || "{}")),
  // };

  const token = useClient(() => getCookie('token'));

  const currentUser = useClient(() =>
    JSON.parse(getCookie('currentUser') || '{}'),
  );

  const handleLogin = async (fromData) => {
    try {
      const response = await axios.post('/users/login', {
        email: fromData.email,
        password: fromData.password,
      });
      return response;
    } catch (error) {
      return error;
    }
  };

  const handleSignup = async (fromData) => {
    try {
      const response = await userAxios.post('/user/sign-up', {
        ...FormData,
      });
      return response;
    } catch (error) {
      return error;
    }
  };

  const handleLogOut = async () => {
    deleteCookie('currentUser');
    deleteCookie('token');
    router.replace('/login');
  };

  return {
    token,
    currentUser,
    handleLogin,
    handleSignup,
    handleLogOut,
  };
}

// import axios from "axios"
// import { setCookie, getCookie, deleteCookie } from "cookies-next"
// import { useRouter } from "next/router.js"
// import { useEffect } from "react"
// export const useAuth = () => {
//     const router = useRouter()
//     const token = getCookie("token")
//     let currentUser;

//     if (token && typeof window !== "undefined") {
//         currentUser =JSON.parse(getCookie("currentUser"))
//     }

// 	const clearCookieStorage = () => {
// 		deleteCookie("token")
// 		deleteCookie("currentUser")
// 	}

// 	const verifyUser = (data) => {
// 		clearCookieStorage()
// 		setCookie("token", data.token, { path: "/" })
// 		setCookie("currentUser", data.user, { path: "/" })
// 	}

// 	async function loginWithEmail(email, password) {
// 		try {
// 			const resData = await axios.post("https://api.itaxeasy.com/user/login", {
// 				email: email,
// 				password: password,
// 			})
// 			return resData.data
// 		} catch (error) {
// 			return {error:error.response.data}
// 		}
// 	}

// 	const logout = () => {
//         clearCookieStorage()
//         router.push("/login")
// 	}

// 	return {
// 		loginWithEmail,
// 		logout,
// 		verifyUser,
// 		currentUser,
// 		token,
// 	}
// }
