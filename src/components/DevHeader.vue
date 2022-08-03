<template>
  <header class="header">
    <div class="header-wrapper">
      <font-awesome-icon icon="fa-solid fa-bars" class="icon-color fa-2xl" />
      <div class="image-wrapper">
        <img src="@/assets/logo.png" class="logo-image" alt="logo">
      </div>
      <font-awesome-icon icon="fa-solid fa-code" class="icon-color fa-2xl" />
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
  .header {
    background-color: $background-primary;
    border-bottom: 1px solid $divider;
    padding: 15px 20px;
  }
  
  .icon-color {
    color: $label-tertiary;
  }

  .header-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .image-wrapper {
    max-width: 32px;

    .logo-image {
      width: 100%;
    }
  }
</style>