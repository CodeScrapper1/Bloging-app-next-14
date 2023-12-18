import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="text-gray-400 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <span>
          @ 2023 <a href="/">Mehtab kazmi</a>. All Rights Reserved
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium">
          <li>
            <Link href="/about" className="mr-4 hover:underline md:mr:6">
              About
            </Link>
            <Link href="#" className="mr-4 hover:underline md:mr:6">
              Rrivacy Policy
            </Link>
            <Link href="#" className="mr-4 hover:underline md:mr:6">
              Licensing
            </Link>
            <Link href="/contact" className="mr-4 hover:underline md:mr:6">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
