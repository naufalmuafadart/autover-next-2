import axios from 'axios';
import qs from 'qs';
import { postUserPayload } from '@/services/dataTypes';

export async function postUser({
  full_name, phone_number, email, password,
}: postUserPayload) {
  try {
    const data = qs.stringify({
      full_name, phone_number, email, password,
    });
    const config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_EXPRESS_END_POINT}/api/user`,
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

export async function signUpX({
  full_name, phone_number, email, password,
}: postUserPayload) {
  try {
    const data = qs.stringify({
      full_name, phone_number, email, password,
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
