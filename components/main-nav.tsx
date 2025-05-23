import Link from "next/link";
import { Icons } from "@/components/icons";

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Icons.logo className="h-12 w-auto p-1" />
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}
