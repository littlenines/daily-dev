<template>
  <main class="main">
<aside class="overlay">
  <nav class="navigation">
    <div class="navigation-header">
        <div class="navigation-header-user">
            <img src="/img/logo-card.webp" alt="logo">
            <p class="navigation-header-user-level">10</p>
        </div>
      <DevButton icon :ico="gear" :iconSize="largeTwo" :size="medium"/>
    </div>
    <div class="navigation-username">
      <p class="navigation-username-title">Test Test</p>
      <p class="navigation-username-subtitle">@ananas</p>
    </div>
  </nav>
</aside>
    <div class="container">
      <div class="tag-card">
        <p class="tag-card-title">{{ cardTitle }}</p>
        <DevButton :iconStart="faPlus"
                   :iconSize="large"
                   :variant="defaultVariant">
                   {{ cardButtonTitle }}
        </DevButton>
      </div>

      <div class="popular">
        <h3 class="popular-title">{{ popularTitle }}</h3>
        <DevButton :iconEnd="faPlus"
                   :iconSize="large"
                   :size="medium"
                   :variant="transparentVariant">
                   {{ transparentButtonTitle }}
        </DevButton>
      </div>
      
      <div v-for="(card, index) in cards" :key="index">
        <a href="/"> 
          <DevCard :image="card.image"
                   :title="card.title"
                   :date="card.date"
                   :time="card.time"
                   :hero="card.hero"
                   :iconStart="card.iconStart"
                   :iconMiddle="card.iconMiddle"
                   :iconEnd="card.iconEnd"
                   :promoted="card.promoted"
                   :iconLabel="card.icoLabel" 
                   class="card-space"/>
        </a>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import DevButton from '@/components/DevButton.vue'
import DevCard from '@/components/DevCard.vue'
import cards from '../../cards.json'

export default {
  name: 'HomeView',
  components: {
    DevButton,
    DevCard
  },
  data () {
    return {
      cards,
      large: 'lg',
      medium: 'md',
      largeTwo: '2x',
      popularTitle: 'Popular',
      gear: 'fa-solid fa-gear',
      defaultVariant: 'default',
      faPlus: "fa-solid fa-plus",
      cardButtonTitle: "Choose tags",
      transparentVariant: 'transparent',
      transparentButtonTitle: 'Add shortcuts',
      cardTitle: 'Get the content you need by creating a personal feed'
    }
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  // display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  cursor: pointer;
  background-color: $theme-overlay;
}

.navigation {
  height: 100%;
  width: 28rem;
  background-color: $background-primary;
  
  &-header {
    display: flex;
    padding: 2.8rem 2.4rem 2rem;
    justify-content: space-between;

    &-user {
      display: flex;
      width: 6.5rem;
      height: 3.2rem;
      align-items: center;
      border-radius: .8rem;
      background-color: $background-secondary;

      img {
        width: 3.2rem;
        height: 3.2rem;
        border-radius: .8rem;
      }
    }

    &-user-level {
      color: $white;
      font-weight: 700;
      font-size: 1.5rem;
      padding-left: .5rem; 
    }
  }

&-username {
  padding: 0 2.4rem;
    &-title {
      color: $white;
      font-weight: 700;
      line-height: 2rem;
      font-size: 1.5rem;
      margin-bottom: .2rem;
    }

    &-subtitle {
      color: $label-secondary;
      line-height: 1.8rem;
      font-size: 1.3rem;
      margin-bottom: .2rem;
    }
  
}
}

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
    margin-bottom: 3rem;
  }

  .popular-title {
    flex: 1;
    color: $white;
    font-size: 1.7rem;
    line-height: 2.4rem;
    font-weight: 700;
  }

  .card-space {
    margin-bottom: 3.2rem;
  }
</style>
