<template>
  <main class="main">
    <div class="container">
      <div class="tag-card">
        <p class="tag-card-title">{{ cardTitle }}</p>
        <DevButton isIconLeft
                   :iconLeft="iconButton"
                   :iconSize="iconSize"
                   :variant="'default'">
                   {{ cardButtonTitle }}
        </DevButton>
      </div>

      <div class="popular">
        <h3 class="popular-title">Popular</h3>
        <DevButton isIconRight 
                   :iconRight="iconButton"
                   :iconSize="iconSize"
                   :btnSize="'md'"
                   :variant="'transparent'">
                   {{ transparentButtonTitle }}
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
      cardButtonTitle: "Choose tags",
      cardTitle: 'Get the content you need by creating a personal feed',
      iconButton: "fa-solid fa-plus",
      iconSize: 'lg',
      transparentButtonTitle: 'Add shortcuts'
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
    margin-bottom: 2.4rem;
    border: 1px solid $button-default;
    box-shadow: $default-shadow;
  }

  .tag-card-title {
    color: $white;
    font-weight: 400;
    font-size: 1.3rem;
    text-align: center;
    line-height: 1.8rem;
    margin-bottom: 1rem;
  }

  .popular {
    display: flex;
    align-items: center;
  }

  .popular-title {
    flex: 1;
    color: $white;
    font-size: 1.7rem;
    line-height: 2.4rem;
    font-weight: 700;
  }
</style>
