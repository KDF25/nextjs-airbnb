import { ClientOnly, EmptyState } from "@shared/ui";
import { FavoritesClient } from "@widgets/favoritesClient";
import { getCurrentUser, getFavoriteListings } from "../actions";

export default async function FavoritePage() {
  const currentUser = await getCurrentUser();
  const listings = await getFavoriteListings();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite listings."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
}
