"use client";

import { ListingCategory } from "@entities/listings";
import { SafeUser } from "@entities/user";
import { useCountries } from "@shared/hooks";
import { Avatar, Offers, Sleep } from "@shared/ui";
import dynamic from "next/dynamic";
import React from "react";
import { IconType } from "react-icons";

const Map = dynamic(() => import("@shared/ui/map/map"), {
  ssr: false,
});

type Props = {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  locationValue: string;
};

export const ListingInfo: React.FC<Props> = ({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
}) => {
  const { getByValue } = useCountries();
  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className=" text-xl font-semibold flex flex-row items-center gap-2">
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image} userName={user?.name} />
        </div>
        <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
          <p>{guestCount} guests</p>
          <p>{roomCount} rooms</p>
          <p>{bathroomCount} bathrooms</p>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category?.label}
          description={category?.description}
        />
      )}
      <hr />
      <div className="flex flex-col">
        <p className="text-4xl font-bold text-[#FF5A5F]">
          air<span className="text-black">cover</span>
        </p>
        <p className="text-neutral-500 pt-3">
          Every booking includes free protection from Host cancellations,
          listing inaccuracies, and other issues like trouble checking in.
        </p>
        <p className="text-black font-bold underline pt-3 cursor-pointer">
          Learn more
        </p>
      </div>
      <hr />
      <p className="text-lg font-light text-neutral-500">{description}</p>
      <hr />
      <Sleep />
      <hr />
      <Offers />
      <hr />
      <p className="text-xl font-semibold">{`Where you’ll be`}</p>
      <Map center={coordinates} locationValue={locationValue} />
    </div>
  );
};
