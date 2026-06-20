import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-white">
      <div className="flex flex-col items-start justify-center w-xl h-screen gap-5">
        <div className="flex flex-col items-start justify-center gap-4.25">
          <div className="flex items-center justify-center w-11.25 aspect-square">
            <Image
              src={"/profile.jpg"}
              width={100}
              height={100}
              alt="profile"
              draggable={false}
              className="overflow-hidden"
              unoptimized
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-1">
            <h2 className="text-black font-inter font-medium text-[14px]">
              Adarsh Anilkumar
            </h2>
            <p className="text-black/40 font-tiro font-semibold text-[15px]">
              /आदर्श/
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-3.5">
          <p className="text-black font-inter font-medium text-[14px]">
            A software engineer and designer, born and raised in Kerala.
          </p>
          <p className="text-black font-inter font-medium text-[14px]">
            After two years of freelancing, I am now building Eschaton — a
            digital sanctuary crafted for focus, clarity, and intentional work.
            Alongside this journey, I continue exploring the depths of Cloud and
            DevOps, expanding the systems behind the experiences I create.
          </p>
          <p className="text-black font-inter font-medium text-[14px]">
            I design and engineer thoughtful interfaces where motion, detail,
            and code converge, transforming ideas into experiences that feel
            alive down to the smallest pixel.
          </p>
          <p className="text-black font-inter font-medium text-[14px]">
            Beyond my work, I share my journey through programming and design on
            <Link
              href=""
              className="underline underline-offset-2 pl-1 decoration-1 decoration-dotted"
            >
              YouTube
            </Link>{" "}
            {`, documenting lessons, experiments, and creative explorations. In
            the quiet hours between projects, you'll often find me crafting
            interfaces simply for the joy of creating.`}
          </p>
          <p className="text-black font-inter font-medium text-[14px]">
            Feel free to reach out at me
            <Link
              href="https://x.com/aadhi_tsx"
              target="_blank"
              className="underline underline-offset-2 pl-1 decoration-1 decoration-dotted"
            >
              @aadhi_tsx
            </Link>{" "}
            or connect with me on
            <Link
              href="https://www.linkedin.com/in/aadarsh-anilkumar-901a90319/"
              target="_blank"
              className="underline underline-offset-2 pl-1 decoration-1 decoration-dotted"
            >
              LinkedIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
