<template>
     <TheHeader title="RememberMe"></TheHeader>
     <TheResource></TheResource>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResource from './components/TheResource';
export default {
  components: {
    TheHeader,
    TheResource
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>