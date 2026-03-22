import axios from "axios";

const PROFILE_ENDPOINTS = [
  "https://a08-venue-explorer-backend.vercel.app/api/v1/auth/me",
  "https://a08-venue-explorer-backend-2.vercel.app/api/v1/auth/me",
  "https://a08-venue-explorer-backend-3.vercel.app/api/v1/auth/me",
];

export type ProfileResponse = {
  success: boolean;
  data: {
    _id: string;
    name: string;
    email: string;
    tel: string;
    role: string;
    createdAt: string;
    __v: number;
  };
};

async function fetchProfile(endpoint: string, token: string): Promise<ProfileResponse> {
  const response = await axios.get<ProfileResponse>(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Cache-Control": "no-store",
    },
  });

  return response.data;
}

export default async function getUserProfile(token: string): Promise<ProfileResponse> {
  let lastError: unknown = null;

  for (const endpoint of PROFILE_ENDPOINTS) {
    try {
      return await fetchProfile(endpoint, token);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError ?? new Error("Unable to fetch user profile");
}
