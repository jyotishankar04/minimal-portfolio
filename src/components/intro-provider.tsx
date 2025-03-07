"use client";

// src/pages/index.tsx
import { useState } from "react";
import IntroLoader from "./intro-loader";

const IntroProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [showLoader, setShowLoader] = useState<boolean>(true);

  return (
    <div className="w-full h-screen overflow-auto">
      {showLoader && <IntroLoader onComplete={() => setShowLoader(false)} />}
      {!showLoader && children}
    </div>
  );
};

export default IntroProvider;
