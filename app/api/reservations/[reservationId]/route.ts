import { prisma } from "@shared/database";
import { NextResponse } from "next/server";
import { getCurrentUser } from "../../../actions";

export async function DELETE(
  request: Request,
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) return NextResponse.error();

  const urlParts = new URL(request.url).pathname.split("/");
  const reservationId = urlParts[urlParts.length - 1];

  if (!reservationId || typeof reservationId !== "string") {
    throw new Error("Invalid Id");
  }

  const reservation = await prisma.reservation.deleteMany({
    where: {
      id: reservationId,
      OR: [{ userId: currentUser.id }, { listing: { userId: currentUser.id } }],
    },
  });

  return NextResponse.json(reservation);
}