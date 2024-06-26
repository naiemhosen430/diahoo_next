import { Inter } from "next/font/google";
import "./globals.css";
import AuthContexProvider from "@/Contexts/AuthContex";
import Header from "@/app/Components/Shared/Header";
import LeftSideBer from "./Components/Shared/LeftSideBer";
import RightSideBer from "./Components/Shared/RightSideBer";
import ProfileContextProvider from "@/Contexts/ProfileContext";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Next js setup",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#1e1e1e]">
          <AuthContexProvider>
            <ProfileContextProvider>

            <Header />
            <div className="grid grid-cols-7 p-4">
              <LeftSideBer />
              <div className="lg:col-span-3 col-span-12">

                {children}
              </div>
              <RightSideBer />
            </div>
            </ProfileContextProvider>

          </AuthContexProvider>

        </div>
      </body>
    </html>
  );
}
