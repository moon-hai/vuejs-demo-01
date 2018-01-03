<template>
  <router-link :to="{name: 'tag', params: {name: tag}}" tag="li">
    <a class="label label-pill label-default">{{ tag }}</a>&nbsp;</router-link>
</template>

<script>
  export default {
    props: ['tag'],
  };
</script>
