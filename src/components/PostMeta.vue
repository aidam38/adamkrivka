<template>
   <div class="post-meta">
      {{ post.author }}. {{ post.date }}.
      <template v-if="post.timeToRead">
        <strong>{{ post.timeToRead }} min to read.</strong>
      </template>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
.post-meta {
  font-size: .8em;
  opacity: .8;
}
</style>