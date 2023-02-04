import axios from 'axios';
import qs from 'qs';
import { postAuthPayload } from '@/services/dataTypes/payload';

export async function postAuth({
  email, password,
}: postAuthPayload) {
  try {
    const data = qs.stringify({
      email, password,
    });
    const config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_EXPRESS_END_POINT}/api/auth/`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    // @ts-ignore
    return error.response.data;
  }
}

export async function signInX({
  email, password,
}: postAuthPayload) {
  try {
    const data = qs.stringify({
      email, password,
    });
    const config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_EXPRESS_END_POINT}/X`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    // @ts-ignore
    return error.response.data;
  }
}
