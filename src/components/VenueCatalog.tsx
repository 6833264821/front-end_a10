import Link from "next/link";
import Card from "@/components/Card";
import resolveVenueImage from "@/libs/venueImage";

export default async function VenueCatalog({
  venuesJson,
}: {
  venuesJson: Promise<VenueJson> | VenueJson;
}) {
  const resolvedVenuesJson = await venuesJson;

  return (
    <section className="mt-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {resolvedVenuesJson.data.map((venueItem: VenueItem) => (
          <Link
            key={venueItem.id}
            href={`/venue/${venueItem.id}`}
            className="rounded-xl overflow-hidden shadow hover:shadow-md transition"
          >
            <Card venueName={venueItem.name} imgSrc={resolveVenueImage(venueItem)} />
          </Link>
        ))}
      </div>
    </section>
  );
}
