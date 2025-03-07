import IntroProvider from "@/components/intro-provider";
import MenuBar from "@/components/MenuBar";
import Navbar from "@/components/navbar";
import React from "react";

const layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <IntroProvider>
      <div className="flex flex-col h-full xl:w-2/3  md:w-3/4 w-full mx-auto  font-geistMono">
        <Navbar />
        <>{children}</>
      </div>
      <MenuBar />
    </IntroProvider>
  );
};

export default layout;
