import Link from "next/link";

type TopMenuItemProps = {
  title: string;
  pageRef: string;
};

export default function TopMenuItem({ title, pageRef }: TopMenuItemProps) {
  return (
    <Link
      href={pageRef}
      className="rounded-md bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-300"
    >
      {title}
    </Link>
  );
}
