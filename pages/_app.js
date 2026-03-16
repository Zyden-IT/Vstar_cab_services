import Layout from "@/shared/Layout";
import "@/styles/global.css";
import "@/styles/responsive.scss";
import "@/styles/style.scss";
import React, { useState, useEffect } from "react";
import '@flaticon/flaticon-uicons/css/all/all.css';
import PreLoader from "@/components/preLoader/PreLoader";

export default function App({ Component, pageProps }) {
  const [showPreloader, setShowPreloader] = useState(null);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("preloader_shown");
    const hasContactHash = window.location.hash === "#contact-form";
    setShowPreloader(!alreadyShown && !hasContactHash);
  }, []);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem("preloader_shown", "true");
    setShowPreloader(false);
  };

  if (showPreloader === null) return null;

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>

      {/* Preloader sits on top as a fixed overlay, only for real users */}
      {showPreloader && (
        <PreLoader onComplete={handlePreloaderComplete} />
      )}
    </>
  );
}