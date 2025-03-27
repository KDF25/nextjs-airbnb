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

export const metadata = {
  title: "Airbnb",
  description: "Airbnb",
  icons: "https://www.seekpng.com/png/full/957-9571167_airbnb-png.png",
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
          {/* <SearchModal /> */}
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
