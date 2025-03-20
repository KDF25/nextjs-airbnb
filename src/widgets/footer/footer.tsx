"use client";

import { ClientOnly, FooterColumn } from "@shared/ui";
import { footerData } from "./config";
import React from "react";

export const Footer: React.FC = () => {
  const footerColumns = footerData.map((item, index) => (
    <FooterColumn key={index} index={index} data={item} />
  ));

  return (
    <ClientOnly>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
        {footerColumns}
        <p className="text-sm">Uzbekistan</p>
      </div>
    </ClientOnly>
  );
};
