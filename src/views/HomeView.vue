<template>
  <main class="main">
    <div class="container">
      <div class="tag-card">
        <p class="tag-card-title">{{ cardTitle }}</p>
        <DevButton :iconStart="iconButton"
                   :iconSize="iconSize"
                   :variant="tagVariant">
                   {{ cardButtonTitle }}
        </DevButton>
      </div>

      <div class="popular">
        <h3 class="popular-title">{{ popularTitle }}</h3>
        <DevButton :iconEnd="iconButton"
                   :iconSize="iconSize"
                   :size="shortcutIconSize"
                   :variant="popularVariant">
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
      iconSize: 'lg',
      tagVariant: 'default',
      shortcutIconSize: 'md',
      popularTitle: 'Popular',
      popularVariant: 'transparent',
      cardButtonTitle: "Choose tags",
      iconButton: "fa-solid fa-plus",
      transparentButtonTitle: 'Add shortcuts',
      cardTitle: 'Get the content you need by creating a personal feed'
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
