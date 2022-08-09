<template>
  <header class="header">
      <DevButton icon
                 :ico="ico"
                 :iconSize="iconSize"
                 :size="medium"/>
      <div class="image-wrapper">
        <img src="@/assets/logo.png" class="logo-image" alt="logo">
      </div>
      <font-awesome-icon icon="fa-solid fa-code" class="icon-color fa-2x" />
  </header>
</template>

<script>
import DevButton from '@/components/DevButton.vue'
export default {
  components: {
    DevButton
  },
  data () {
    return {
      medium: 'md',
      iconSize: '2x',
      ico: 'fa-solid fa-bars'
    }
  }
}
</script>

<style lang='scss' scoped>
  .header {
    display: flex;
    padding: 1rem 2rem;
    margin-bottom: 4rem;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $divider;
    background-color: $background-primary;
  }
  
  .icon-color {
    color: $label-tertiary;
  }

  .image-wrapper {
    max-width: 3.2rem;

    .logo-image {
      width: 100%;
    }
  }
</style>