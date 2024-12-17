<script setup>
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
    <SectionsHomeHero />
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
