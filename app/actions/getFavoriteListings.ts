import { prisma } from "@shared/database";
import { getCurrentUser } from "./getCurrentUser";

export async function getFavoriteListings() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    const favorites = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])],
        },
      },
    });

    const safeFavorite = favorites.map((favorite) => ({
      ...favorite,
      createdAt: favorite.createdAt.toString(),
    }));

    return safeFavorite;
  } catch (error: any) {
    throw new Error(error.message);
  }
}