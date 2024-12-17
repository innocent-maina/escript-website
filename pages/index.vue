<script setup>
useSeoMeta({
  title: "Simplify Prescriptions with Kenya's Best Healthcare App",
  ogTitle: "Simplify Prescriptions with Kenya's Best Healthcare App",
  description: "Easily manage prescriptions, health records, and care needs.",
  ogDescription: "Easily manage prescriptions, health records, and care needs.",
});

definePageMeta({
  layout: "pre-launch",
});

useHead({
  bodyAttrs: {
    class: "navbar-light",
  },
});
</script>

<template>
  <div>
    <SectionsHomeWahome />

    <SectionsHomeSection2 />

    <!-- Complete solution -->
    <SectionsHomeCompleteSolution />

    <!-- Everything You need -->
    <SectionsHomeForHospitals />

    <SectionsHomeSection4 />

    <!-- Privacy -->
    <SectionsHomePrivacy />

    <!-- QA -->
    <SectionsHomeQA />

    <!-- Get started today -->
    <SectionsHomeGetStarted />
  </div>
</template>
