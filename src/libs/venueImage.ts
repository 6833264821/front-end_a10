const LOCAL_IMAGE_BY_VENUE_ID: Record<string, string> = {
  "67d044e0c0062950a985c509": "/img/bloom.jpg",
  "67d04663c0062950a985c50c": "/img/sparkspace.jpg",
  "67d047cec0062950a985c50f": "/img/grandtable.jpg",
};

export default function resolveVenueImage(venue: { id: string; picture: string }) {
  return LOCAL_IMAGE_BY_VENUE_ID[venue.id] ?? venue.picture;
}
