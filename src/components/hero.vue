<template>
  <div class="hero">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'hero',
  props: {
    msg: String,
  },
};
</script>

<style></style>
