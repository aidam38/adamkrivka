<template>
  <button
    role="button"
    aria-label="Change language"
    @click.prevent="changeLanguage"
    class="change-language"
  >
    <div v-if="this.$i18n.locale === 'cz-cz'">
      <img src="../assets/images/en-us.png" alt="" />
    </div>
    <div v-else-if="this.$i18n.locale === 'en-us'">
      <img src="../assets/images/cz-cz.png" alt="" />
    </div>
  </button>
</template>

<script>
export default {
  methods: {
    changeLanguage() {
      if (this.$i18n.locale === "cz-cz") this.$i18n.locale = "en-us";
      else this.$i18n.locale = "cz-cz";
    },
  },
};
</script>

<style lang="scss">
.change-language {
  background-color: transparent;
  border: 0;
  width: 45px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: none;
  }
}
</style>