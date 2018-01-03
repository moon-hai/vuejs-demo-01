<template>
  <ul class="tag-list">
    <app-tag v-for="tag in tags" :tag="tag"></app-tag>
  </ul>
</template>

<script>
  import Tag from './Tag';

  export default {
    computed: {
      tags() {
        return this.$store.getters.getTags;
      },
    },
    created() {
      this.$store.dispatch('fetchTags');
    },
    components: {
      appTag: Tag,
    },
  };
</script>
