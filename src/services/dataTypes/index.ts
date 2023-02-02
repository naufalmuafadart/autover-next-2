/* eslint-disable semi */

export interface postUserPayload {
  full_name: string;
  phone_number: string;
  email: string;
  password: string;
}

export interface signInPayload {
  email: string;
  password: string;
}

export interface GetServerSideProps {
  req: {
    cookies : {
      accessToken: string;
      refreshToken: string;
    }
  };
}
