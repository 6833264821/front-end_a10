import Link from "next/link";

const venues = [
  { vid: "001", name: "The Bloom Pavilion", imageUrl: "/img/bloom.jpg" },
  { vid: "002", name: "Spark Space", imageUrl: "/img/sparkspace.jpg" },
  { vid: "003", name: "The Grand Table", imageUrl: "/img/grandtable.jpg" },
];

export default function CardPanel() {
  return (
    <section className="mt-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {venues.map((venue) => (
          <Link key={venue.vid} href={`/venue/${venue.vid}`} className="rounded-xl overflow-hidden shadow hover:shadow-md transition">
            <img src={venue.imageUrl} alt={venue.name} className="h-44 w-full object-cover" />
            <div className="p-4 bg-white">
              <h2 className="text-lg font-semibold text-slate-800">{venue.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
