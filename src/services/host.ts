import axios from 'axios';
import { postHostPayload } from '@/services/dataTypes';

export async function getCheckIsAHost(token: String) {
  try {
    const config = {
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_EXPRESS_END_POINT}/api/host/check`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    // @ts-ignore
    return error.response.data;
  }
}

export async function postHost(payload: postHostPayload, token: String) {
  try {
    const config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_EXPRESS_END_POINT}/api/host`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
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
