import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6">
      <div className="text-xl font-bold">BasedMVP</div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="#">Company</Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
          <li>
            <Link href="#">Portfolio</Link>
          </li>
          <li>
            <Link href="#">Contact Sales</Link>
          </li>
        </ul>
      </nav>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Book a call
      </button>
    </header>
  );
}
