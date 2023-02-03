/* eslint-disable semi */

export interface postUserPayload {
  full_name: string;
  phone_number: string;
  email: string;
  password: string;
}

export interface postAuthPayload {
  email: string;
  password: string;
}

export interface district {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetServerSideProps {
  req: {
    cookies : {
      accessToken: string;
      refreshToken: string;
    }
  };
}
