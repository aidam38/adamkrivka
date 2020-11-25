<template>
  <div>
    <form
      method="POST"
      action="https://adamkrivka-staticman.herokuapp.com/v2/entry/aidam38/adamkrivka/main/comments"
      id="comment-form"
    >
      <!-- e.g. "2016-01-02-this-is-a-post" -->
      {{ post.path }}
      <input name="options[slug]" type="hidden" :value="post.url" />
      <label><input name="fields[name]" type="text" />Name</label>
      <label><input name="fields[email]" type="email" />E-mail</label>
      <label><textarea name="fields[message]"></textarea>Message</label>

      <input
        type="hidden"
        name="options[reCaptcha][siteKey]"
        value="6LeB3-wZAAAAAB629BrzU-LvJB-UKvqdQzA_iUWh"
      />
      <input
        type="hidden"
        name="options[reCaptcha][secret]"
        value="sW3gxgpnv4MEwz8dQGDB2Bqag/r+coTAPW7ZswG36NsbdarzWQXZB9IEBeRox1BNbp2pO/oMBwEOyMVRhkxX8z4WOjTAHaycyQZ0J3zAT/EQFC9Bt/wiO0+jnCHJSKndrGyIGn+uvMPMKVFcMICBGALl3bG8LutgmU/UjX3mRBiQ7g52VcCo0/w+E91em665H1uivyQ2I0ynIpCSMNXU4LHms7aF8fDi7d+2APGbRzgJuH7nSSkz5mQ+QtlgAo+x/iy8zShKXhbK6HiUYCdr5Z2YSA2tTXjqwfsOAqoGpNx6etgtTDV4u9TswIGIRdmZyVN8EquS+MpXK3dTdIfSMyinxKMXiVzo8Y/29RAFdSCqZL6AT3srEFrZ4n83FESLKgIUvSEIvHwj7uvT3vcOgqfqjh0qG9wJ7AznbxDkPUmqpjB8u2AduHByp9ADrH5oLHr+D9V5AbuvtRUIO6SMyuT33o26s2ley71cxpToptHDACRy3WyeNYjM+N9oB1Oigr9tAq3j/BpuY/qFeXML65UdpHLdLVoT+zPEdBNEmKuTLbdKHSpzrnqcAGW5qbcHR/DGBTAfU2eKsBDXH1ZbuvM5+jU3LFEvM1tpWkxBVPomrrbveXKLA/uh/Mm5VZr2aDTZE5s1/WsZskS1N2/butmodchDvIfe24E9r7FsrtI="
      />

      <button
        class="g-recaptcha"
        data-sitekey="6LeB3-wZAAAAAB629BrzU-LvJB-UKvqdQzA_iUWh"
        data-callback="onSubmit"
        data-action="submit"
      >
        Odeslat komentář
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["post"],
  methods: {
    async recaptcha() {
      // (optional) Wait until recaptcha has been loaded.
      await this.$recaptchaLoaded();

      // Execute reCAPTCHA with action "login".
      const token = await this.$recaptcha("login");

      // Do stuff with the received token.
    },
    onSubmit(token) {
      document.getElementById("comment-form").submit();
    },
  },
};
</script>

<style>
</style>