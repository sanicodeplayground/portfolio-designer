import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="my-grid py-8 lg:py-10">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Rosina Pissaco Logo"
          width={60}
          height={60}
          priority
        />
      </Link>
    </header>
  );
}
