import { Listing } from "@prisma/client";

export type safeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};
