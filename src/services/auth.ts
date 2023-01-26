import axios from 'axios';
import { signUpPayload } from '@/services/dataTypes';

export default async function signUp({
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
