/* eslint-disable semi */

export interface signUpPayload {
  full_name: string;
  phone_number: string;
  email: string;
  password: string;
}

export interface signInPayload {
  email: string;
  password: string;
}
