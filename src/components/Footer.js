import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="bg-primary text-white text-center py-8">
        <Link href="/contact">
          <span className="text-xm text-secondary font-semibold">
            {" "}
            {new Date().getFullYear()} &copy; Marc-André Camirand
          </span>
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
