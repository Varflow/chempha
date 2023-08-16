<template>
  <div class="contact-page">
    <Head>
      <Title>Chempha Contact Us</Title>
      <Meta name="og:title" content="Chempha Contact Us" />
    </Head>
    <div class="container">
      <AppPageBanner
        title="Contact us"
        subtitle="If you have any questions or would like to learn more about our ingredients, please don't hesitate to get in touch with us."
      />

      <div class="contact-content row gy-4">
        <div class="col-12 col-lg-6">
          <h4 class="contact-title">Contact Us</h4>
          <h5 class="contact-subtitle">We look forward to hearing from you!</h5>

          <form class="contact-form" @submit.prevent="submit">
            <div class="contact-form__row">
              <label for="name" class="form-field col-12">
                Your name*
                <input
                  class="form-field__input"
                  type="text"
                  id="name"
                  required
                  v-model="name"
                />
              </label>
              <label for="email" class="form-field col-12">
                Your email*
                <input
                  class="form-field__input"
                  type="email"
                  id="email"
                  required
                  v-model="email"
                />
              </label>
            </div>
            <label for="message" class="form-field">
              Your message
              <textarea
                id="message"
                v-model="message"
                class="form-field__textarea"
              />
            </label>
            <div class="contact-form__actions">
              <AppButton variant="black">Send message</AppButton>
            </div>
          </form>
        </div>
        <div class="col-12 col-lg-6 contact-map">
          <div class="contact-map-label">
            <p class="contact-address">
              <b>Chempha OÜ</b> <br />
              Narva mnt 7-634 <br />
              10117 Tallinn, Estonia<br />
              <a href="tel:+372 712 2708">Tel. +372 712 2708</a><br />
            </p>
            <p class="contact-email">
              <span class="contact-email__label">EMAIL</span><br />
              <a href="mailto:info@chempha.com" class="contact-email__value"
                >info@chempha.com</a
              >
            </p>
          </div>

          <div class="contact-map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.731435995756!2d24.758015876640776!3d59.43755360235374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692935e18486e35%3A0x268a68b569620c84!2zTmFydmEgbW50IDctNjM0LCAxMDExNyBUYWxsaW5uLCDQrdGB0YLQvtC90LjRjw!5e0!3m2!1sru!2sua!4v1690224073201!5m2!1sru!2sua"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Micromodal from "micromodal";
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },

  methods: {
    async submit() {
      try {
        const client = useStrapiClient();
        const config = useRuntimeConfig();

        const formData = this.$data;

        await client("/email", {
          method: "POST",
          body: {
            to: config.public.mailTo,
            subject: "Application from site (Contact Us)",
            html: `
            <p><b>Name</b>: ${formData.name}</p>
            <p><b>Email</b>: ${formData.email}</p>
            <p><b>Message</b>: ${formData.message}</p>
          `,
          },
        });

        Micromodal.show("success-modal");
        setTimeout(() => {
          Micromodal.close("success-modal");
        }, 5000);
      } catch (error) {
        Micromodal.show("error-modal");
        setTimeout(() => {
          Micromodal.close("error-modal");
        }, 5000);
      }
    },
  },
};
</script>
