"use client";

import Image from "next/image";
import logo from "@/public/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUsersCog } from "react-icons/fa";
import { TbServerCog, TbAdjustmentsCog } from "react-icons/tb";
import { MdAdminPanelSettings } from "react-icons/md";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { UserButton } from "@/components/auth/user-button";

export const Header = () => {
  const pathname = usePathname();

  return (
    <div className="h-full w-full">
      <nav className="mx-auto flex h-full max-w-sm items-center justify-between rounded-xl bg-white p-4 md:max-w-md lg:max-w-lg">
        <Image
          src={logo}
          alt="AuthHero"
          sizes="100vw"
          height={0}
          width={0}
          className="h-auto w-28"
        />
        <div className="flex gap-x-2">
          <UserButton />
        </div>
      </nav>
    </div>
  );
};
