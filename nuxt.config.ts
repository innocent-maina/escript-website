import { resolve } from "path";
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
  },

  target: "static",

  app: {
    head: {
      meta: [
        {
          name: "Escript",
          content: "Prescription App | Healthcare Solutions Kenya",
        },
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "keywords",
          content:
            "prescription app, healthcare Kenya, digital medical records, e-prescribing platform, online prescription services, pharmacy management, hospital management software, healthcare platform, Kenya health tech, digital prescriptions Kenya, medical ID system, prescription management, doctor software Kenya, pharmacist tools, healthcare software Africa, electronic prescriptions, medication tracking, healthcare digitalization Kenya, health management platform",
        },
        {
          name: "description",
          content:
            "Escript is a leading prescription app and healthcare platform in Kenya, offering e-prescribing, digital medical records, and seamless communication for doctors, pharmacists, and patients.",
        },
        { name: "robots", content: "index, follow" },
        { name: "x-robots", content: "index, follow" },
        {
          property: "og:title",
          content: "Escript - Prescription App & Healthcare Platform Kenya",
        },
        {
          property: "og:description",
          content:
            "Escript simplifies healthcare in Kenya with an innovative prescription app, e-prescribing tools, and a secure digital medical records platform for doctors, pharmacists, and patients.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://www.escript.co.ke" },
        {
          property: "og:image",
          content: "https://www.escript.co.ke/images/escript-health.png",
        },
        { property: "og:site_name", content: "Escript" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Escript - Prescription App & Healthcare Solutions Kenya",
        },
        {
          name: "twitter:description",
          content:
            "Discover Escript, Kenya's leading healthcare platform for e-prescriptions, medical record management, and doctor-patient communication.",
        },
        {
          name: "twitter:image",
          content: "https://www.escript.co.ke/images/escript-twitter.jpg",
        },
      ],
      title: "Escript - Prescription App & Healthcare Solutions Kenya",
      script: [],
    },
  },

  site: {
    name: "Escript",
    description: "Kenya's Leading Prescription App & Healthcare Platform",
    url: "https://escript.co.ke",
    language: "en",
  },

  css: [
    "~/assets/css/vendors/bootstrap.min.css",
    "~/assets/css/vendors/flaticon.css",
    "~/assets/css/vendors/menu.css",
    "~/assets/css/vendors/fade-down.css",
    "~/assets/css/vendors/magnific-popup.css",
    "~/assets/css/vendors/animate.css",
    "~/assets/css/main.scss",
    "~/assets/css/responsive.scss",
    "~/assets/css/color-scheme/blue.scss",
    "~/assets/css/color-scheme/crocus.scss",
    "~/assets/css/color-scheme/green.scss",
    "~/assets/css/color-scheme/magenta.scss",
    "~/assets/css/color-scheme/pink.scss",
    "~/assets/css/color-scheme/skyblue.scss",
    "~/assets/css/color-scheme/violet.scss",
  ],

  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Rubik: {
            wght: [300, 400, 500, 600, 700],
          },
          "Plus+Jakarta+Sans": {
            wght: [400, 500, 600, 700],
          },
          Inter: {
            wght: [400, 500, 600, 700, 800],
          },
          download: true,
          inject: true,
        },
      },
    ],
    "nuxt-swiper",
    "@nuxtjs/seo",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
  ],

  compatibilityDate: "2024-12-04",
});
