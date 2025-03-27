import { prisma } from "@shared/database";
import { NextResponse } from "next/server";
import { getCurrentUser } from "../../../actions";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser) return NextResponse.error();

  // Получаем listingId из URL
  const urlParts = new URL(request.url).pathname.split("/");
  const listingId = urlParts[urlParts.length - 1];

  if (!listingId || typeof listingId !== "string") throw new Error("Invalid Id");

  const favoriteIds = [...(currentUser.favoriteIds || []), listingId];

  const user = await prisma.user.update({
    where: { id: currentUser.id },
    data: { favoriteIds },
  });

  return NextResponse.json(user);
}

export async function DELETE(request: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser) return NextResponse.error();

  // Получаем listingId из URL
  const urlParts = new URL(request.url).pathname.split("/");
  const listingId = urlParts[urlParts.length - 1];

  if (!listingId || typeof listingId !== "string") throw new Error("Invalid Id");

  const favoriteIds = (currentUser.favoriteIds || []).filter((id) => id !== listingId);

  const user = await prisma.user.update({
    where: { id: currentUser.id },
    data: { favoriteIds },
  });

  return NextResponse.json(user);
}
