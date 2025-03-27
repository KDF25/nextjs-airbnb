import { SafeUser } from "@entities/user";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-toastify";
import { useLoginModal } from "./useLoginModal";

type Props = {
  listingId: string;
  currentUser?: SafeUser | null;
};

export const useFavorite = ({ listingId, currentUser }: Props) => {
  const router = useRouter();
  const loginModel = useLoginModal();

  const hasFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModel.onOpen();
      }

      try {
        let request;

        if (hasFavorite) {
          request = () => axios.delete(`/api/favorites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`);
        }

        await request();
        router.refresh();
        toast.success("Success");
      } catch (error: any) {
        toast.error(`Something Went Wrong ${error}`);
      }
    },
    [currentUser, hasFavorite, listingId, loginModel, router],
  );

  return {
    hasFavorite,
    toggleFavorite,
  };
};
