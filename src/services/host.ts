import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
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
