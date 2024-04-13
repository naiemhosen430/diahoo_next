import { Inter } from "next/font/google";
import "./globals.css";
import AuthContexProvider from "@/Contexts/AuthContex";
import Header from "@/app/Components/Shared/Header";
import LeftSideBer from "./Components/Shared/LeftSideBer";
import RightSideBer from "./Components/Shared/RightSideBer";

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
            <Header />
            <div className="grid grid-cols-7 p-4">
              <LeftSideBer />
                {children}
              <RightSideBer />
            </div>
          </AuthContexProvider>

        </div>
      </body>
    </html>
  );
}
