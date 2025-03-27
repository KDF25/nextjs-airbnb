import { ClientOnly, EmptyState } from "@shared/ui";
import { getCurrentUser, getListingById, getReservations } from "../../actions";
import { ListingClient } from "@widgets/listingClient";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: Promise<IParams> }) => {
  const listing = await getListingById(await params);
  const reservations = await getReservations(await params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        currentUser={currentUser}
        reservations={reservations}
      />
    </ClientOnly>
  );
};

export default ListingPage;
