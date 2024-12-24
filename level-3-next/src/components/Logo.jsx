import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <Link href="/" className="logo-container navbar-brand">
      <Image
        src="/images/the-cafika-logos.png"
        alt="Kafika logo"
        width={200}
        height={200}
      />
    </Link>
  );
}

export default Logo;
