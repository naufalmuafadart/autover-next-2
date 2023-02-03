import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export async function getDistricts() {
  try {
    const config = {
      method: 'get',
      url: `${process.env.NEXT_PUBLIC_EXPRESS_END_POINT}/api/district`,
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    // @ts-ignore
    return error.response.data;
  }
}
