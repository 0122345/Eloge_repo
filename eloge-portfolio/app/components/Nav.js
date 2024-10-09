import { BsThreeDots } from "react-icons/bs";
import Link from "next/link";

function Nav() {
  return (
    <main className="hidden lg:flex top-3  right-14 absolute">
      <BsThreeDots className="text-8xl" />
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default Nav;
