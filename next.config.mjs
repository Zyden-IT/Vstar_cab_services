export default {
  trailingSlash: false,
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  generateRobotsTxt: true,
  async rewrites() {
    return [
      { source: "/page-not-found", destination: "/404" },
      { source: "/contact", destination: "/contact/Contact" },
      { source: "/service", destination: "/service/Service" },
      { source: "/about", destination: "/about/About" },
    ];
  },
};