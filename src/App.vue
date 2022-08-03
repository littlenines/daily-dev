<template>
  <DevHeader />
  <router-view/>
</template>
<script>
import DevHeader from '@/components/DevHeader.vue'
export default {
  components: {
    DevHeader
  }
  
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
html {
    font-size: 10px;
    font-family: "Roboto", "Arial", "Helvetica", "sans-serif";
}

body {
    background-color: $background-primary;
}
</style>
