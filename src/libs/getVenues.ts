import axios from "axios";

const VENUE_ENDPOINTS = [
  "https://a08-venue-explorer-backend.vercel.app/api/v1/venues",
  "https://a08-venue-explorer-backend-2.vercel.app/api/v1/venues",
  "https://a08-venue-explorer-backend-3.vercel.app/api/v1/venues",
];

async function fetchVenueList(endpoint: string): Promise<VenueJson> {
  const response = await axios.get<VenueJson>(endpoint, {
    headers: { "Cache-Control": "no-store" },
  });
  return response.data;
}

export default async function getVenues(): Promise<VenueJson> {
  let lastError: unknown = null;

  for (const endpoint of VENUE_ENDPOINTS) {
    try {
      return await fetchVenueList(endpoint);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError ?? new Error("Failed to fetch venues");
}
