import { axiosInstance } from '../api/axios';
import { useAuth } from './useAuth';

type responseStructure = { access: string; refresh: string };

export const useRefresToken = () => {
  const { newTokens } = useAuth();

  const refresh = async (refreshToken: string) => {
    const response = await axiosInstance.post<responseStructure>(
      'api/token/refresh/',
      JSON.stringify({ refresh: refreshToken }),
      { headers: { 'Content-Type': 'application/json' } }
    );

    newTokens(response.data.access, response.data.refresh);
    return response.data.access;
  };

  return { refresh };
};
