import { postHostPayload } from '@/services/dataTypes/payload';
import getAxiosInstance from '@/services/axios/instance';

export async function getCheckIsAHost(accessToken: any, refreshToken: string) {
  try {
    const axiosInstance = getAxiosInstance(accessToken, refreshToken);

    const url = `${process.env.NEXT_PUBLIC_EXPRESS_END_POINT}/api/host/check`;
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    // @ts-ignore
    return error.response.data;
  }
}

export async function postHost(
  payload: postHostPayload,
  accessToken: any,
  refreshToken: string,
) {
  try {
    const axiosInstance = getAxiosInstance(accessToken, refreshToken);

    const url = `${process.env.NEXT_PUBLIC_EXPRESS_END_POINT}/api/host`;
    const response = await axiosInstance.post(url, payload);
    return response.data;
  } catch (error) {
    // @ts-ignore
    return error.response.data;
  }
}
