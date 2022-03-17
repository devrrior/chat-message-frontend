import { axiosPrivate } from '../api/axios';
import { useEffect } from 'react';
import { useRefresToken } from './useRefreshToken';
import { useAuth } from './useAuth';
import { AxiosRequestConfig } from 'axios';

type headersProps = {};

export const useAxiosPrivate = () => {
  const { refresh } = useRefresToken();
  const { authState } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // Need to improve
        if (config.headers && !config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${authState.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh(
            authState.refreshToken as string
          );
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [authState, refresh]);

  return { axiosPrivate };
};
