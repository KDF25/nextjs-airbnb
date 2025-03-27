import { Providers } from "@app/providers";
import "@shared/styles/globals.scss";
import { ClientOnly } from "@shared/ui";
import { Footer } from "@widgets/footer";
import { LoginModal } from "@widgets/loginModal";
import { Navbar } from "@widgets/navbar";
import { RegisterModal } from "@widgets/registerModal";
import { RentModal } from "@widgets/rentModal";
import { Nunito } from "next/font/google";
import { getCurrentUser } from "./actions";
import { SearchModal } from "@widgets/searchModal";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb",
  icons: "https://www.seekpng.com/png/full/957-9571167_airbnb-png.png",
  openGraph: {
    title: "Airbnb",
    description:
      "Explore a world of unique stays and experiences with Airbnb. Book your next adventure in over 220 countries and regions.",
    url: process.env.NEXT_BASE_URL,
    siteName: "Airbnb",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/fe7217ff-0b24-438d-880d-b94722c75bf5.jpg",
        width: 800,
        height: 600,
        alt: "Airbnb",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <SearchModal />
          <RegisterModal />
          <LoginModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">
          <Providers>{children}</Providers>
        </div>
        <Footer />
      </body>
    </html>
  );
}
