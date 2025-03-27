import { ListingCard, safeListing } from "@entities/listings";
import { SafeUser } from "@entities/user";
import { Container, Heading } from "@shared/ui";

type Props = {
  listings: safeListing[];
  currentUser?: SafeUser | null;
};

export const FavoritesClient: React.FC<Props> = ({ listings, currentUser }) => {
  return (
    <Container>
      <Heading title="Favorites" subtitle="List of places you favorites!" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
        {listings.map((listing) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
};
