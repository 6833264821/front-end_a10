"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const covers = [
  "/img/cover.jpg",
  "/img/cover2.jpg",
  "/img/cover3.jpg",
  "/img/cover4.jpg",
];

export default function Banner() {
  const [imgIndex, setImgIndex] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <section className="relative overflow-hidden rounded-2xl border border-stone-300/70 bg-stone-900 shadow-lg">
      <img
        src={covers[imgIndex]}
        alt="Event banner"
        className="h-56 w-full object-cover opacity-80 md:h-72 cursor-pointer"
        onClick={() => setImgIndex((imgIndex + 1) % 4)}
      />
      <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-r from-stone-900/80 to-stone-900/35 px-6 text-stone-100 md:px-10">
        <h1 className="text-2xl font-semibold leading-tight md:text-4xl">
          where every event finds its venue
        </h1>
        <p className="mt-2 max-w-xl text-sm text-stone-200 md:text-base">
          Find the perfect venue for meetings, weddings, private parties, and more.
        </p>
        {session?.user?.name ? (
          <p className="mt-3 text-base font-semibold text-emerald-300">Welcome {session.user.name}</p>
        ) : null}
        <div className="absolute bottom-4 right-4">
          <button
            onClick={() => router.push("/venue")}
            className="rounded-lg bg-stone-100 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-white"
          >
            Select Venue
          </button>
        </div>
      </div>
    </section>
  );
}
