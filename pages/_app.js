import Layout from "@/shared/Layout";
import "@/styles/global.css";
import "@/styles/responsive.scss";
import "@/styles/style.scss";
import React, { useState } from "react";
import '@flaticon/flaticon-uicons/css/all/all.css';
import PreLoader from "@/components/preLoader/PreLoader";

export default function App({ Component, pageProps }) {
  const [showPreloader, setShowPreloader] = useState(() => {
    if (typeof window === "undefined") return false;
    return !sessionStorage.getItem("preloader_shown");
  });

  const handlePreloaderComplete = () => {
    sessionStorage.setItem("preloader_shown", "true");
    setShowPreloader(false);
  };

  return (
    <>
      {showPreloader ? (
        <PreLoader onComplete={handlePreloaderComplete} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}