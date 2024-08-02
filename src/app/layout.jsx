"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import AuthContexProvider, { AuthContex } from "@/Contexts/AuthContex";
import Header from "@/app/Components/Shared/Header";
import LeftSideBer from "./Components/Shared/LeftSideBer";
import RightSideBer from "./Components/Shared/RightSideBer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import PostsContextProvider from "@/Contexts/PostContext";
import ChatContextProvider from "@/Contexts/ChatContext";
import connectIo from "@/api/connectIo";
import StateContexttProvider from "@/Contexts/StateContext";
import NtfContextProvider from "@/Contexts/NtfContext";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Diahoo",
  description: "",
};

export default function RootLayout({ children }) {
  const { state } = useContext(AuthContex);
  const { user } = state;
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 0,
    });
  }, []);

  useEffect(() => {
    if (user._id) {
      const socketInstance = connectIo(user._id);
      setSocket(socketInstance);

      // Cleanup function to disconnect the socket when the component unmounts or user changes
      return () => {
        socketInstance.disconnect();
      };
    }
  }, [user._id]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#1e1e1e]">
          <StateContexttProvider>
            <AuthContexProvider>
              <NtfContextProvider>
                <ChatContextProvider>
                  <PostsContextProvider>
                    <Header />
                    <div className="grid w-full overflow-hidden grid-cols-7 h-screen lg:pt-24 pt-28">
                      <div className="lg:col-span-2 overflow-hidden col-span-12 overflow-y-auto custom-scrollbar-hidden">
                        <LeftSideBer />
                      </div>
                      <div className="lg:col-span-3 overflow-hidden col-span-12 custom-scrollbar-hidden overflow-y-auto">
                        {children}
                      </div>
                      <div className="lg:col-span-2 overflow-hidden col-span-12 overflow-y-auto custom-scrollbar-hidden">
                        <RightSideBer />
                      </div>
                    </div>
                  </PostsContextProvider>
                </ChatContextProvider>
              </NtfContextProvider>
            </AuthContexProvider>
          </StateContexttProvider>
        </div>
      </body>
    </html>
  );
}
