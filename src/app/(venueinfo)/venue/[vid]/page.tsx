import getVenue from "@/libs/getVenue";
import resolveVenueImage from "@/libs/venueImage";

export default async function VenueDetailPage({
  params,
}: {
  params: Promise<{ vid: string }>;
}) {
  const { vid } = await params;
  const venueJson = await getVenue(vid);
  const venue = venueJson.data;

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-6 md:px-6">
      <div className="flex items-center gap-6">
        <img
          src={resolveVenueImage(venue)}
          alt={venue.name}
          className="h-40 w-40 rounded-xl object-cover"
        />
        <div>
          <h1 className="text-2xl font-semibold">{venue.name}</h1>
          <p>Address: {venue.address}</p>
          <p>District: {venue.district}</p>
          <p>Postal Code: {venue.postalcode}</p>
          <p>Tel: {venue.tel}</p>
          <p>Daily Rate: {venue.dailyrate}</p>
        </div>
      </div>
    </main>
  );
}
