"use client";

import { SafeUser } from "@entities/user";
import { Categories } from "@features/categories";
import { Search } from "@features/searchBar";
import UserMenu from "@features/userMenu/userMenu";
import { Container, Loader, Logo } from "@shared/ui";
import { Suspense } from "react";

type Props = {
  currentUser?: SafeUser | null;
};

export const Navbar: React.FC<Props> = ({ currentUser }) => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="fixed w-full bg-white z-10 shadow-sm">
        <div className="py-4 border-b-[1px]">
          <Container>
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              <Logo />
              <Search />
              <UserMenu currentUser={currentUser} />
            </div>
          </Container>
        </div>
        <Categories />
      </div>
    </Suspense>
  );
};
