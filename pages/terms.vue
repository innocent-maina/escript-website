<script setup lang="ts">
definePageMeta({
  layout: "pre-launch",
});
useSeoMeta({
  title: "Terms & Conditions",
  ogTitle: "Terms & Conditions",
  description: "Review the terms and conditions of working with Escript.",
  ogDescription: "Review the terms and conditions of working with Escript.",
});

useHead({
  bodyAttrs: {
    class: "navbar-dark",
  },
});

const sections = ref([
  {
    id: 1,
    title: "Introduction",
    text: [
      "Welcome to EScript, the digital prescription platform designed to give patients, doctors, pharmacists, and hospitals a seamless healthcare experience. By accessing and using EScript, you agree to abide by the terms and conditions outlined in this document.",
      "Please read these terms carefully before using our platform. If you have any questions, feel free to contact our support team at any time.",
    ],
  },
  {
    id: 2,
    title: "Services We Provide",
    text: [
      "EScript provides a secure, digital platform for managing prescriptions. Our services include prescription tracking, medication reminders, digital medical IDs, and seamless prescription fulfillment between patients, doctors, and pharmacies.",
      "We aim to empower patients with transparency over their healthcare while streamlining workflows for medical professionals and institutions.",
    ],
  },
  {
    id: 3,
    title: "User Responsibilities",
    text: [
      "Users are responsible for providing accurate and up-to-date personal and medical information to ensure EScript functions effectively.",
      "Patients must ensure they follow their doctor's prescriptions and recommendations. Misuse of the platform, such as falsifying information, may result in termination of access.",
      "Healthcare providers and pharmacies are responsible for inputting accurate prescription details to ensure safety and efficiency for all users.",
    ],
  },
  {
    id: 4,
    title: "Confidentiality and Data Privacy",
    text: [
      "At EScript, we prioritize your privacy and security. Your personal and medical information is stored securely and used only for providing the services outlined on our platform.",
      "We will never share your data with third parties without your consent, except as required by law or for healthcare delivery purposes (e.g., sharing prescriptions with pharmacies).",
    ],
  },
  {
    id: 5,
    title: "Payment and Refund Policy",
    text: [
      "EScript may offer subscription plans or pay-per-use services for healthcare providers, pharmacies, or institutions. Fees and payment details will be communicated clearly during registration.",
      "Refunds for subscription services may be requested within 7 days of payment, provided no services have been used. After service usage, refunds will not be granted.",
    ],
  },
  {
    id: 6,
    title: "Limitations of Liability",
    text: [
      "EScript provides a platform for managing prescriptions and healthcare data but does not replace professional medical advice. Patients should always consult qualified healthcare providers regarding their treatments.",
      "EScript is not liable for errors in prescriptions provided by healthcare professionals or delays in fulfillment caused by third-party pharmacies.",
      "While we strive for accuracy and uptime, we cannot guarantee uninterrupted access to our platform due to external factors.",
    ],
  },
  {
    id: 7,
    title: "Termination of Services",
    text: [
      "Users may discontinue their use of EScript at any time by deactivating their accounts or contacting support.",
      "EScript reserves the right to terminate user access if there is misuse, falsification of information, or any behavior that breaches these terms.",
      "Healthcare providers and institutions are responsible for any outstanding subscription fees upon termination.",
    ],
  },
  {
    id: 8,
    title: "Amendments to Terms",
    text: [
      "EScript reserves the right to update or amend these terms and conditions at any time. Any changes will be communicated to users via email or platform notifications.",
      "Continued use of EScript after updates indicates your acceptance of the revised terms.",
    ],
  },
  {
    id: 9,
    title: "Governing Law",
    text: [
      "These terms and conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which EScript operates, without regard to its conflict of law provisions.",
    ],
  },
]);
</script>

<template>
  <div>
    <section
      id="privacy-page"
      class="gr--whitesmoke pb-80 inner-page-hero division"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <div class="inner-page-title">
              <h2 class="s-52 w-700">Terms and Conditions</h2>
              <p class="p-lg">
                These terms are effective as of 17th November 2024
              </p>
            </div>

            <div class="txt-block legal-info">
              <div v-for="section in sections" :key="section.id">
                <h4 class="s-30 w-700">
                  <span>{{ section.id }}.</span> {{ section.title }}
                </h4>
                <p v-for="text in section.text" :key="text">{{ text }}</p>
                <div v-if="section.subSections">
                  <div
                    v-for="subSection in section.subSections"
                    :key="subSection.id"
                  >
                    <h5 class="s-24 w-700">
                      <span>{{ subSection.id }}.</span> {{ subSection.title }}
                    </h5>
                    <p v-for="text in subSection.text" :key="text">
                      {{ text }}
                    </p>
                    <ul v-if="subSection.listItems" class="simple-list">
                      <li
                        v-for="(item, index) in subSection.listItems"
                        :key="index"
                        class="list-item"
                      >
                        <p>{{ item }}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h4 class="s-30 w-700"><span>9.</span> How to Contact Us</h4>
              <p>
                If you have any questions or suggestions about this Terms of
                Service, do not hesitate to contact us at
                <a href="mailto:hello@escript.co.ke" class="color--theme"
                  >hello@escript.co.ke</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
