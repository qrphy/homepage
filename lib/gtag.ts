export const GA_MEASUREMENT_ID = "G-1FTZJ3VKTT";

export const pageview = (url: string) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
