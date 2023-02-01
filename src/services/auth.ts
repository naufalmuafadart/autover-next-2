import axios from 'axios';
import qs from 'qs';
import { signUpPayload, signInPayload } from '@/services/dataTypes';

export async function signUp({
  full_name, phone_number, email, password,
}: signUpPayload) {
  try {
    const data = qs.stringify({
      full_name, phone_number, email, password,
    });
    const config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_EXPRESS_END_POINT}/api/auth/signup`,
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

export async function signIn({
  email, password,
}: signInPayload) {
  try {
    const data = qs.stringify({
      email, password,
    });
    const config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_EXPRESS_END_POINT}/api/auth/signin`,
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
