import Link from "next/link";
import { Hero } from "@/components/Hero";

export default function Home() {

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-8 gap-16 ">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Hero />
      
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center">
        <h1 className="text-2xl font-bold text-center mr-3">ComicVerse</h1> Data
        provided by{" "}
        <Link
          href="https://developer.marvel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {" "}
          Marvel.
        </Link>{" "}
        © 2014 Marvel
      </footer>
    </div>
  );
}
