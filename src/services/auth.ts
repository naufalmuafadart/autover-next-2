import axios from 'axios';
import { signUpPayload, signInPayload } from '@/services/dataTypes';

export async function signUp({
  full_name, phone_number, email, password,
}: signUpPayload) {
  try {
    const response = await axios.post(
      'http://localhost:3000/auth/signup',
      {
        full_name, phone_number, email, password,
      },
    );
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
    const response = await axios.post(
      'http://localhost:3000/auth/signin',
      {
        email, password,
      },
    );
    return response.data;
  } catch (error) {
    // @ts-ignore
    return error.response.data;
  }
}
