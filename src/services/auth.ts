import axios from 'axios';
import FormData from 'form-data';
import Cookies from 'js-cookie';
import { postAuthPayload } from '@/services/dataTypes/payload';

export async function postAuth({
  email, password,
}: postAuthPayload) {
  try {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    const url = `${process.env.NEXT_PUBLIC_EXPRESS_END_POINT}/api/auth`;
    const config = {
      method: 'post',
      url,
      data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    // @ts-ignore
    return error.response.data;
  }
}

export async function putAuth(refreshToken: string) {
  const data = new FormData();
  data.append('refresh_token', refreshToken);
  const url = `${process.env.NEXT_PUBLIC_EXPRESS_END_POINT}/api/auth`;
  const config = {
    method: 'put',
    url,
    data,
  };
  const response = await axios(config);
  const { accessToken } = response.data.data;
  Cookies.set('accessToken', accessToken);
  return accessToken;
}
