<template>
  <header class="header">
    <div class="header-sm">
      <DevButton icon
                :ico="ico"
                :iconSize="iconSize"
                :size="medium"
                @click="openNav"/>
      <div class="image-wrapper">
        <img src="@/assets/logo.png" class="logo-image" alt="logo">
      </div>
      <font-awesome-icon icon="fa-solid fa-code" class="icon-color fa-2x" />
    </div>
    <div class="header-md">
      <div class="image-wrapper">
        <img src="@/assets/logo-desktop.svg" class="logo-image" alt="logo">
      </div>
      <div class="user">
        <img class="user-img" src="/img/logo-card.webp" alt="logo">
        <p class="user-level">10</p>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
  },
  computed: {
    ...mapGetters('desktop', ['getDesktop'])
  },
  methods: {
    ...mapActions('navigation',['setIsNav']),

    openNav () {
      this.setIsNav(true)
    }
  }
}
</script>

<style lang='scss' scoped>
  .header {
    padding: .5rem 2rem;
    margin-bottom: 4rem;
    border-bottom: 1px solid $divider;
    background-color: $background-primary;
    @include lg {
      width: 100%;
      position: fixed;
      margin-bottom: unset;
    }

    &-sm,
    &-md {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-sm {
      @include lg {
        display: none;
      }
    
    }
    &-md {
      display: none;
      @include lg {
        display: flex;
      }
    }
  }
  
  .icon-color {
    color: $label-tertiary;
  }

  .image-wrapper {
    max-width: 3.2rem;
    @include lg {
      max-width: 10rem;
    }

    .logo-image {
      width: 100%;
    }
  }
</style>