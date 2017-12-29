<template>
  <router-link :to="{name: 'tag', params: {name: tag}}" tag="li">
    <a class="label label-pill label-default">{{ tag }}<span>  - -  </span></a></router-link>
</template>

<script>
  export default {
    props: ['tag']
  }
</script>
