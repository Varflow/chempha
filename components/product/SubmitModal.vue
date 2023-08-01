<template>
  <AppModal id="submit-modal" title="Submit an application">
    <form class="submit-modal__form" @submit.prevent="submit">
      <label class="form-field">
        Your name
        <input type="text" class="form-field__input" required />
      </label>
      <label class="form-field">
        Your email
        <input type="email" class="form-field__input" required />
      </label>
      <label class="form-field">
        Subject
        <input type="text" class="form-field__input" />
      </label>
      <label class="form-field">
        Message
        <textarea class="form-field__textarea" required />
      </label>
      <div class="submit-modal__actions">
        <AppButton variant="black" appearence="filled">Submit an application</AppButton>
      </div>
    </form>
  </AppModal>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  },
  methods: {
    async submit() {
      const url = useStrapiUrl();

      const formData = this.$data;
      const submitPayload = {
        ...formData,
        title: this.title,
      };

      const response = await $fetch(`${url}/email`, {
        method: 'POST',
        body: { to: 'kapishdima@gmail.com', subject: 'TEST', test: 'TEST' },
      });

      console.log(response);
    },
  },
};
</script>
