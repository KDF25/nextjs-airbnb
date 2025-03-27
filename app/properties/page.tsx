import { ClientOnly, EmptyState } from "@shared/ui";
import { getCurrentUser, getListings } from "../actions";
import { PropertiesClient } from "@widgets/propertiesClient";

export default async function PropertiesPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  const listings = await getListings({ userId: currentUser.id });

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No Properties found"
          subtitle="Looks like you have not any Properties"
        />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <PropertiesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
}
