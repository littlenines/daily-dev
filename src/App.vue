<template>
  <DevHeader />
  <router-view />
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
    font-family: "Segoe UI", "Roboto", "Arial", "Helvetica", "sans-serif";
}

body {
    background-color: $background-primary;
}

.container {
  width: 100%;
  max-width: 32rem;

  @include md {
    max-width: 65rem;
  }

  @include xl {
    max-width: 1024px;
  }

  @include xxl {
    max-width: 1370px;
  }
}

.flex-1 {
  @include md {
    flex: 1;
  }
}

.user {
    display: flex;
    width: 6.5rem;
    height: 3.2rem;
    align-items: center;
    border-radius: .8rem;
    background-color: $background-secondary;

    .user-img {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: .8rem;
    }
    
    .user-level {
      padding-left: .5rem; 
    }
}

.align-center {
  display: flex;
  align-items: center;
}

</style>
