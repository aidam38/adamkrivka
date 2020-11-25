<template>
  <div class="post-meta">
    {{ post.author }}. {{ post.date }}.
    <template v-if="post.timeToRead">
      <strong>{{ post.timeToRead }} {{ $t("toread") }}.</strong>
    </template>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style lang="scss">
.post-meta {
  font-size: 0.8em;
  opacity: 0.8;
}
</style>