import { ListingCard } from "@entities/listings";
import { ClientOnly, Container, EmptyState } from "@shared/ui";
import { getCurrentUser, getListings, IListingsParams } from "./actions";

interface HomeProps {
  searchParams: Promise<IListingsParams>;
}

export default async function Home({ searchParams }: HomeProps) {
  const listing = await getListings(await searchParams);
  const currentUser = await getCurrentUser();

  if (listing.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 overflow-x-hidden">
          {listing.map((list) => {
            return (
              <ListingCard
                key={list.id}
                data={list}
                currentUser={currentUser}
              />
            );
          })}
        </div>
      </Container>
    </ClientOnly>
  );
}
