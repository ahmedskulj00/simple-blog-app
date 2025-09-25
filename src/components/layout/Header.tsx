"use client";

import Link from "next/link";
import Button from "../shared/Button";

const Header = () => {
  return (
    <header className="h-11">
      <nav className="flex justify-between items-center h-full text-xl pt-6">
        <Link href="/" className="hover:underline font-bold">
          <h1>Simple Blog App</h1>
        </Link>
        <Link href={"/blog/create"}>
          <Button>Create</Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
