import axios from 'axios';
import FormData from 'form-data';
import { postUserPayload } from '@/services/dataTypes/payload';

// eslint-disable-next-line import/prefer-default-export
export async function postUser({
  full_name, phone_number, email, password,
}: postUserPayload) {
  try {
    const data = new FormData();
    data.append('full_name', full_name);
    data.append('phone_number', phone_number);
    data.append('email', email);
    data.append('password', password);
    const url = `${process.env.NEXT_PUBLIC_EXPRESS_END_POINT}/api/user`;
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
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
