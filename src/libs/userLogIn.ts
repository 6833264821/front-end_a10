import axios from "axios";

const LOGIN_ENDPOINTS = [
  "https://a08-venue-explorer-backend.vercel.app/api/v1/auth/login",
  "https://a08-venue-explorer-backend-2.vercel.app/api/v1/auth/login",
  "https://a08-venue-explorer-backend-3.vercel.app/api/v1/auth/login",
];

type LoginResponse = {
  success: boolean;
  token: string;
  _id: string;
  name: string;
  email: string;
  tel: string;
  role: string;
};

async function postLogin(endpoint: string, email: string, password: string): Promise<LoginResponse> {
  const response = await axios.post<LoginResponse>(
    endpoint,
    { email, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
}

export default async function userLogIn(email: string, password: string): Promise<LoginResponse> {
  let lastError: unknown = null;

  for (const endpoint of LOGIN_ENDPOINTS) {
    try {
      return await postLogin(endpoint, email, password);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError ?? new Error("Unable to log in");
}
