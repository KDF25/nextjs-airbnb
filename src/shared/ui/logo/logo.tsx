"use client";

import { paths } from "@shared/config";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Logo: React.FC = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push(paths.main)}>
      <Image
        alt="logo"
        className="hidden md:block cursor-pointer"
        height="100"
        width="100"
        src="/assets/logo.png"
      />
    </div>
  );
};
