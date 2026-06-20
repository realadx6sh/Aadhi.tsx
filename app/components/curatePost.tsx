"use client";
import Image from "next/image";
import React, { useState } from "react";

interface MenuItem {
  title: string;
}

const menu: MenuItem[] = [
  {
    title: "Captures",
  },
];

const postPath = [
  {
    path: "/post1.jpg",
  },
  {
    path: "/post2.jpg",
  },
  {
    path: "/post3.jpg",
  },
  {
    path: "/post4.jpg",
  },
  {
    path: "/post5.jpg",
  },
  {
    path: "/post6.jpg",
  },
];

const CuratePost: React.FC = () => {
  const [index, currentIndex] = useState<number>(0);

  const handleIndex = (index: number) => {
    currentIndex(index);
  };

  return (
    <div className="flex flex-col items-start justify-start w-full h-106.25 gap-5">
      <div className="flex items-start justify-center gap-3.75">
        {menu.map((item, idx) => (
          <p
            key={idx}
            className="text-black font-inter font-medium text-[14px] cursor-pointer underline underline-offset-8 decoration-2 decoration-white"
            onClick={() => handleIndex(idx)}
            style={{
              textDecorationColor: index == idx ? "#008CFF" : "#FFFFFF",
            }}
          >
            {item.title}
          </p>
        ))}
      </div>
      <div className="flex items-start justify-start flex-wrap gap-2.5">
        {postPath.map((item, idx) => (
          <Post path={item.path} key={idx} />
        ))}
      </div>
    </div>
  );
};

interface Path {
  path: string;
}

const Post: React.FC<Path> = ({ path }) => {
  return (
    <div className="relative w-46.25 aspect-square overflow-hidden bg-[#F6F6F6]">
      <Image
        src={path}
        alt="profile"
        fill
        quality={100}
        priority
        loading="eager"
        unoptimized
        draggable={false}
        sizes="(max-width: 185px) 185px, 185px"
        className="object-cover"
      />
    </div>
  );
};

export default CuratePost;
