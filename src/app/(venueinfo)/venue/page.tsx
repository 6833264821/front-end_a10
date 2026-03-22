import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";

export default async function VenuePage() {
  const venuesJson = getVenues();

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-6 md:px-6">
      <VenueCatalog venuesJson={venuesJson} />
    </main>
  );
}
