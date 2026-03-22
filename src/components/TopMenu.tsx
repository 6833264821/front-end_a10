"use client";

import TopMenuItem from "./TopMenuItem";
import { signIn, signOut, useSession } from "next-auth/react";

export default function TopMenu() {
  const { data: session } = useSession();

  return (
    <header className="border-b border-stone-300 bg-stone-50/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6">
        {!session ? (
          <button
            className="rounded-md bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-300"
            onClick={() => signIn()}
          >
            Sign-In
          </button>
        ) : (
          <button
            className="rounded-md bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-300"
            onClick={() => signOut()}
          >
            Sign-Out
          </button>
        )}
        <TopMenuItem title="Booking" pageRef="/booking" />
        <img src="/img/logo.png" alt="website logo" className="h-10 w-10 rounded-full object-cover" />
      </div>
    </header>
  );
}
