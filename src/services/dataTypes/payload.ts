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

export interface postHostPayload {
  district_id: string;
}
