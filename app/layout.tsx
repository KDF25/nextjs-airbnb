// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "@shared/styles/globals.scss";
import { Navbar } from "@widgets/navbar";

// import ClientOnly from "@/components/ClientOnly";
// import Footer from "@/components/Footer";
// import ToastContainerBar from "@/components/ToastContainerBar";
// import LoginModal from "@/components/models/LoginModal";
// import RegisterModal from "@/components/models/RegisterModal";
// import RentModal from "@/components/models/RentModal";
// import SearchModal from "@/components/models/SearchModal";
// import Navbar from "@/components/navbar/Navbar";
import { Nunito } from "next/font/google";
import { ClientOnly } from "@shared/ui";
import { RegisterModal } from "@widgets/registerModal";
import { LoginModal } from "@widgets/loginModal";
import { Footer } from "@widgets/footer";
import { Providers } from "@app/providers";
import { getCurrentUser } from "./actions";
// import getCurrentUser from "./actions/getCurrentUser";

export const metadata = {
  title: "Airbnb Clone",
  description: "Airbnb Clone",
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
          {/* <RentModal /> */}
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
