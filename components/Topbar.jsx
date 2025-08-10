import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import PortfolioButton from "./portfolioButton";

export const Topbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-cblack flex justify-between md:px-56 px-5 md:py-8 py-5">
      <Link href="/">
        <h1 className=" md:text-4xl text-3xl font-semibold text-primary">
          Namiq
        </h1>
        </Link>
      <Link
        href="https://lokesh-mondal-portfolio.vercel.app/"
      >
        {/* Portfolio */}
        <PortfolioButton name={"Portfolio"}/>
        {/* <MoveRight /> */}
      </Link>
    </div>
  );
};
