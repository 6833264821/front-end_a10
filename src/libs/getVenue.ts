import axios from "axios";

const VENUE_DETAIL_ENDPOINTS = [
  "https://a08-venue-explorer-backend.vercel.app/api/v1/venues",
  "https://a08-venue-explorer-backend-2.vercel.app/api/v1/venues",
  "https://a08-venue-explorer-backend-3.vercel.app/api/v1/venues",
];

interface VenueDetailJson {
  success: boolean;
  data: VenueItem;
}

async function fetchVenueDetail(endpoint: string, vid: string): Promise<VenueDetailJson> {
  const response = await axios.get<VenueDetailJson>(`${endpoint}/${vid}`, {
    headers: { "Cache-Control": "no-store" },
  });
  return response.data;
}

export default async function getVenue(vid: string): Promise<VenueDetailJson> {
  let lastError: unknown = null;

  for (const endpoint of VENUE_DETAIL_ENDPOINTS) {
    try {
      return await fetchVenueDetail(endpoint, vid);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError ?? new Error(`Failed to fetch venue ${vid}`);
}
