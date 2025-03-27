"use client";

import { categories, paths } from "@shared/config";
import { CategoryBox, Container } from "@shared/ui";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

export const Categories: React.FC = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === paths.main;

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((items, index) => (
          <CategoryBox
            key={index}
            icon={items.icon}
            label={items.label}
            selected={category === items.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
