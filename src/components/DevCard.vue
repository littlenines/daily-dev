<template>
  <div class="card">
    <div class="card-header">
      <a class="image-wrapper" href="/">
        <img src="@/assets/logo-card.webp" alt="">
      </a>
      <DevIcon :icon="'fa-solid fa-ellipsis-vertical'" :size="'2x'"/>
    </div>
  </div>
</template>

<script>
import DevIcon from '@/components/DevIcon.vue'
export default {
  components: {
    DevIcon
  }

}
</script>

<style lang="scss" scoped>
  .card {
    border: 1px solid $divider;
    border-radius: 1.6rem;
    padding: .8rem;
    background-color: $background-secondary;

    &:hover {
      border-color: $divider-secondary;
    }
  }

  .card-header {
    padding: 0 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 2rem;
  }
</style>