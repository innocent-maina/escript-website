<script setup lang="ts">

definePageMeta({
  layout: 'pre-launch'
})

useSeoMeta({
  title: 'Privacy Policy',
  ogTitle: 'Privacy Policy',
  description: 'Read about how we protect your personal information at Escript.',
  ogDescription: 'Read about how we protect your personal information at Escript.',
});

useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

const sections = ref([
  {
    id: 1,
    title: "Introduction",
    text: [
      "Welcome to EScript. Your privacy is important to us, and we are committed to protecting your personal and medical information. This Privacy Policy outlines the types of data we collect, how we use it, and your rights regarding your personal and healthcare-related information.",
      "By using our platform, you agree to the collection, processing, and use of information in accordance with this policy.",
    ],
  },
  {
    id: 2,
    title: "Personal Information We Collect",
    subSections: [
      {
        id: "2.1",
        title: "Information You Provide to Us",
        text: [
          "We collect personal and medical information you provide directly when you:",
          "Register for an account as a patient, doctor, pharmacist, or institution.",
          "Upload medical prescriptions or update your digital medical ID.",
          "Fill out forms or interact with healthcare providers via EScript.",
          "Contact our support team or submit inquiries.",
        ],
        listItems: [
          "Name, email address, phone number, and date of birth.",
          "Medical data, including prescriptions, diagnosis notes, and doctor instructions.",
          "Billing information for any paid services (if applicable).",
          "Healthcare provider details, such as name, license number, and contact information.",
        ],
      },
      {
        id: "2.2",
        title: "Automatic Data Collection",
        text: [
          "When you use our platform, we may automatically collect certain information:",
          "Device Information: Type of device, operating system, and browser used.",
          "Usage Data: Features accessed, time spent on pages, and user activity logs.",
          "IP Address: For identifying location, managing platform security, and preventing unauthorized access.",
          "This data is collected using cookies, analytics tools, and other technologies to enhance platform performance and user experience.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Types of Information",
    text: [
      "We may collect and process the following types of information:",
      "Personal Information: Details such as name, email, phone number, and account details.",
      "Medical Information: Health records, prescriptions, medical IDs, and provider-issued notes.",
      "Non-Personal Information: Aggregated or anonymized data for platform analytics.",
      "Technical Information: Device and connection details like IP address, browser version, and operating system.",
      "This information allows us to securely provide healthcare services and improve user experiences.",
    ],
  },
  {
    id: 4,
    title: "How We Use Personal Information",
    text: ["We use the information collected for the following purposes:"],
    listItems: [
      "To securely manage and deliver digital prescriptions and related healthcare services.",
      "To enable doctors, pharmacists, and patients to share and access medical information efficiently.",
      "To improve the platform experience by analyzing user trends and usage data.",
      "To communicate with you regarding prescriptions, reminders, updates, or support.",
      "To ensure platform security, fraud prevention, and compliance with healthcare laws.",
      "To comply with legal obligations and regulatory requirements.",
    ],
    text: [
      "We do not sell or share your personal or medical information with third parties, except where required by law or with your explicit consent for healthcare purposes.",
    ],
  },
  {
    id: 5,
    title: "Your Rights",
    text: [
      "Under applicable data protection laws (including the GDPR and healthcare privacy regulations), you have certain rights regarding your personal and medical information, including:",
    ],
    listItems: [
      "The right to access the personal and medical information we hold about you.",
      "The right to rectify any inaccurate or incomplete information.",
      "The right to request the deletion of your personal data in certain circumstances (the 'right to be forgotten').",
      "The right to restrict or object to the processing of your personal information.",
      "The right to receive a copy of your data in a secure, commonly used format (data portability).",
      "The right to withdraw consent where processing relies on your explicit consent.",
      "To exercise these rights, please contact us using the details provided in the 'Contact Us' section below.",
    ],
  },
  {
    id: 6,
    title: "Data Retention Policies",
    text: [
      "We retain your personal and medical information only for as long as necessary to fulfill the purposes outlined in this policy, including meeting legal, regulatory, and operational requirements.",
      "Retention periods vary depending on the type of data:",
      "Account Information: Retained as long as your account remains active or until requested for deletion.",
      "Medical Information: Retained securely in compliance with healthcare data retention laws.",
      "Transactional Data: Retained for accounting and regulatory compliance.",
      "Inactive Accounts: If your account remains inactive for a certain period, we may delete or anonymize your data, unless retention is required by law.",
    ],
  },
  {
    id: 7,
    title: "Data Security",
    text: [
      "We take appropriate technical and organizational measures to protect your data against unauthorized access, loss, or misuse. These include encryption, secure data storage, and access controls.",
      "Despite our best efforts, no method of data transmission or storage is 100% secure. You are responsible for maintaining the confidentiality of your account credentials.",
    ],
  },
  {
    id: 8,
    title: "Third-Party Services",
    text: [
      "EScript may integrate with third-party services, such as pharmacies, payment providers, or analytics tools. These third parties operate under their own privacy policies, and we encourage you to review them.",
      "We ensure that any data shared with third-party services is done securely and only as necessary to provide the EScript services.",
    ],
  },
  {
    id: 9,
    title: "Updates to This Privacy Policy",
    text: [
      "We may update this Privacy Policy periodically to reflect changes in legal requirements or our practices. Updated versions will be communicated via email or platform notifications.",
      "Continued use of EScript after updates indicates your acceptance of the revised Privacy Policy.",
    ],
  },
  {
    id: 10,
    title: "Contact Us",
    text: [
      "If you have questions or concerns regarding this Privacy Policy or how your data is handled, please contact us:",
      "Email: support@escript.com",
      "Phone: +123-456-7890",
      "Address: EScript, Healthcare Tower, Main Street, City, ZIP Code.",
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
              <h2 class="s-52 w-700">Privacy Policy</h2>
              <p class="p-lg">
                This policy is effective as of 17th November 2024
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
                    <ul
                      v-if="subSection.listItems"
                      class="simple-list"
                      style="padding-left: 30px"
                    >
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
                <ul
                  v-if="section.listItems"
                  class="simple-list"
                  style="padding-left: 30px"
                >
                  <li
                    v-for="(item, index) in section.listItems"
                    :key="index"
                    class="list-item"
                  >
                    <p>{{ item }}</p>
                  </li>
                </ul>
              </div>

              <h4 class="s-30 w-700"><span>9.</span> How to Contact Us</h4>
              <p>
                If you have any questions or suggestions about this Terms of
                Service, do not hesitate to contact us at
                <a
                  href="mailto:hello@escript.co.ke"
                  class="color--theme"
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
