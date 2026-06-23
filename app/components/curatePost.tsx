"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React, { memo, useCallback, useState } from "react";

interface MenuItem {
  title: string;
}

const MENU: readonly MenuItem[] = [{ title: "Photos" }];

const POST_PATHS: readonly string[] = [
  "/post1.jpg",
  "/post2.jpg",
  "/post3.jpg",
  "/post4.jpg",
  "/post5.jpg",
  "/post6.jpg",
];

const CuratePost: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleIndex = useCallback((idx: number) => {
    setIndex(idx);
  }, []);

  return (
    <div className="flex flex-col items-start justify-start w-full gap-5 select-none">
      <div className="flex items-start justify-center gap-3.75">
        {MENU.map(({ title }, idx) => (
          <p
            key={title}
            className="text-black font-inter font-medium text-[14px] cursor-pointer underline underline-offset-8 decoration-2 decoration-white"
            onClick={() => handleIndex(idx)}
            style={{
              textDecorationColor: index === idx ? "#008CFF" : "#FFFFFF",
            }}
          >
            {title}
          </p>
        ))}
      </div>

      <div className="grid w-full grid-cols-2 sm:grid-cols-3 gap-2.5">
        {POST_PATHS.map((path) => (
          <Post key={path} path={path} />
        ))}
      </div>
    </div>
  );
};

interface PostProps {
  path: string;
}

const Post = memo<PostProps>(({ path }) => {
  return (
    <motion.div className="relative w-full aspect-square overflow-hidden bg-[#F6F6F6]">
      <Image
        src={path}
        alt="profile"
        fill
        quality={100}
        priority
        loading="eager"
        unoptimized
        draggable={false}
        sizes="
          (max-width: 640px) 50vw,
          (max-width: 768px) 33vw,
          185px
        "
        className="object-cover"
      />
    </motion.div>
  );
});

Post.displayName = "Post";

export default CuratePost;
