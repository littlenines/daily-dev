<template>
  <main class="main">
    <div class="container">
      <div class="tag-card">
        <p class="tag-card-title">{{ cardTitle }}</p>
        <DevButton :isIconLeft="true"
                   :iconLeft="iconLeft"
                   :iconSize="iconSize">
                   {{ title }}
        </DevButton>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import DevButton from '@/components/DevButton.vue'

export default {
  name: 'HomeView',
  components: {
    DevButton
  },
  data () {
    return {
      title: "Choose tags",
      cardTitle: 'Get the content you need by creating a personal feed',
      iconLeft: "fa-solid fa-plus",
      iconSize: 'fa-lg'
    }
  }
}
</script>

<style lang="scss" scoped>
  .main {
    display: flex;
    justify-content: center;
  }

  .tag-card {
    display: flex;
    padding: 1rem;
    flex-wrap: wrap;
    border-radius: 1.2rem;
    justify-content: center;
    border: 1px solid $button-default;
    box-shadow: $default-shadow;
  }

  .tag-card-title {
    color: $white;
    font-weight: 300;
    font-size: 1.3rem;
    text-align: center;
    line-height: 1.8rem;
    margin-bottom: 1rem;
  }
</style>
