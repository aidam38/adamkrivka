<template>
  <div>
    <button @click="recaptcha">Execute recaptcha</button>

    <form
      method="POST"
      action="https://adamkrivka-staticman.herokuapp.com/v2/entry/aidam38/adamkrivka/main/comments"
    >
      <!-- e.g. "2016-01-02-this-is-a-post" -->
      <input name="options[slug]" type="hidden" value="ahoj" />
      <label><input name="fields[name]" type="text" />Name</label>
      <label><input name="fields[email]" type="email" />E-mail</label>
      <label><textarea name="fields[message]"></textarea>Message</label>
      <button type="submit">Go!</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    async recaptcha() {
      // (optional) Wait until recaptcha has been loaded.
      await this.$recaptchaLoaded();

      const recaptcha = this.$recaptchaInstance;
      recaptcha.showBadge();
      // Execute reCAPTCHA with action "login".
      const token = await this.$recaptcha("login");

      // Do stuff with the received token.
    },
  },
};
</script>

<style>
</style>