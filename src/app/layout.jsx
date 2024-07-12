"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthContexProvider from "@/Contexts/AuthContex";
import Header from "@/app/Components/Shared/Header";
import LeftSideBer from "./Components/Shared/LeftSideBer";
import RightSideBer from "./Components/Shared/RightSideBer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PostsContextProvider from "@/Contexts/PostContext";
import ChatContextProvider from "@/Contexts/ChatContext";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Next js setup",
  description: "",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 0,
    });
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#1e1e1e]">
          <AuthContexProvider>
            <ChatContextProvider>
              <PostsContextProvider>
                <Header />
                <div className="grid w-full overflow-hidden grid-cols-7 h-screen lg:pt-24 pt-28">
                  <div className="lg:col-span-2 overflow-hidden col-span-12">
                    <LeftSideBer />
                  </div>
                  <div className="lg:col-span-3 overflow-hidden col-span-12 custom-scrollbar-hidden overflow-y-auto">
                    {children}
                  </div>
                  <div className="lg:col-span-2 overflow-hidden col-span-12">
                    <RightSideBer />
                  </div>
                </div>
              </PostsContextProvider>
            </ChatContextProvider>
          </AuthContexProvider>
        </div>
      </body>
    </html>
  );
}
