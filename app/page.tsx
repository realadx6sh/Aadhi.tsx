"use client";

import Image from "next/image";
import Link from "next/link";

import CuratePost from "./components/curatePost";
import LinkPreview from "./components/linkPreview";

const LINKS = {
  kerala: "https://www.google.com/search?q=kerala&ie=UTF-8",
  twitter: "https://x.com/aadhi_tsx",
  linkedin: "https://www.linkedin.com/in/aadarsh-anilkumar-901a90319/",
  youtube: "https://www.youtube.com/@th3atcodeguy",
} as const;

const paragraphStyles = "font-inter text-[14px] font-medium text-black";

const linkStyles =
  "underline decoration-dotted decoration-[1.3px] underline-offset-4 transition-opacity duration-150 ease-(--ease-out-strong) [@media(hover:hover)]:hover:opacity-70 decoration-black/20";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-white px-6 py-20 select-none">
      <div className="flex min-h-screen w-xl flex-col items-start justify-center gap-5">
        {/* Profile */}
        <section className="flex flex-col items-start gap-[17px]">
          <div className="flex aspect-square w-11.25 items-center justify-center">
            <Image
              src="/profile.jpg"
              alt="Adarsh Anilkumar"
              width={100}
              height={100}
              sizes="100px"
              priority
              draggable={false}
              unoptimized
              className="overflow-hidden"
            />
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="font-inter text-[14px] font-medium text-black">
              Adarsh Anilkumar
            </h1>

            <p className="font-tiro text-[15px] font-semibold text-black/40">
              /आदर्श/
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="flex flex-col gap-3.5">
          <p className={paragraphStyles}>
            A software engineer and designer, born and raised in{" "}
            <Link
              href={LINKS.kerala}
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyles}
            >
              Kerala
            </Link>
            .
          </p>

          <p className={paragraphStyles}>
            After two years of freelancing, I am now building Eschaton — a
            digital sanctuary crafted for focus, clarity, and intentional work.
            Alongside this journey, I continue exploring the depths of Cloud and
            DevOps, expanding the systems behind the experiences I create.
          </p>

          <p className={paragraphStyles}>
            I design and engineer thoughtful interfaces where motion, detail,
            and code converge, transforming ideas into experiences that feel
            alive down to the smallest pixel.
          </p>

          <span className={paragraphStyles}>
            Beyond my work, I share my journey through programming and design on{" "}
            <LinkPreview url={LINKS.youtube} name="YouTube" image="" />,
            documenting lessons, experiments, and creative explorations. In the
            quiet hours between projects, you'll often find me crafting
            interfaces simply for the joy of creating.
          </span>

          <p className={paragraphStyles}>
            Feel free to reach out to me at{" "}
            <Link
              href={LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyles}
            >
              @aadhi_tsx
            </Link>{" "}
            or connect with me on{" "}
            <Link
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyles}
            >
              LinkedIn
            </Link>
            .
          </p>
        </section>

        <CuratePost />
      </div>
    </main>
  );
}
