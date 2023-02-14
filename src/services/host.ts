import axios from 'axios';
import { postHostPayload } from '@/services/dataTypes/payload';
import { putAuth } from '@/services/auth';
import Cookies from 'js-cookie';

export async function getCheckIsAHost(refreshToken: string) {
  try {
    const accessToken = await putAuth(refreshToken);
    const url = `${process.env.NEXT_PUBLIC_EXPRESS_END_POINT}/api/host/check`;
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    // @ts-ignore
    return error.response.data;
  }
}

export async function postHost(payload: postHostPayload, refreshToken: string) {
  try {
    await putAuth(refreshToken);
    const token = Cookies.get('accessToken');
    const url = `${process.env.NEXT_PUBLIC_EXPRESS_END_POINT}/api/host`;
    const config = {
      method: 'post',
      url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: payload,
    };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    // @ts-ignore
    return error.response.data;
  }
}
