<template>
  <main class="main">
    <aside class="overlay" v-if="getNav" @click="setNav">
      <nav class="navigation">
        <div class="navigation-wrapper">
          <div class="navigation-header">
              <div class="navigation-header-user">
                  <img src="/img/logo-card.webp" alt="logo">
                  <p class="navigation-header-user-level">10</p>
              </div>
            <DevButton icon :ico="gear" :iconSize="largeTwo" :size="medium"/>
          </div>
          <div class="navigation-username">
            <p class="navigation-username-title">{{ usernameTitle }}</p>
            <p class="navigation-username-subtitle">{{ usernameSubtitle }}</p>
          </div>
        </div>
        <div class="navigation-discussion">
          <ul>
            <li v-for="(item, index) in navTop" :key="index">
              <a href="/" class="discussion-link">
                <font-awesome-icon :icon="item.icon" class="icon-divider"/>
                <p>{{ item.title }}</p>
              </a>
            </li>
          </ul>
        </div>

        <div class="navigation-footer">
           <ul>
            <li v-for="(item, index) in navBottom" :key="index">
              <a href="/" class="discussion-link">
                <font-awesome-icon :icon="item.icon" class="icon-divider"/>
                <p>{{ item.title }}</p>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
    <div class="container">
      <div class="tag-card">
        <p class="tag-card-title">{{ cardTitle }}</p>
        <DevButton :iconStart="faPlus"
                   :iconSize="large">
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
      
      <div v-for="(card, index) in cards" :key="index" class="card-space">
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
                   :iconLabel="card.icoLabel" />
        </a>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'
import cards from '../../cards.json'
import navTop from '../../navigation-top.json'
import navBottom from '../../navigation-bottom.json'

import DevCard from '@/components/DevCard.vue'
import DevButton from '@/components/DevButton.vue'

export default {
  name: 'HomeView',
  components: {
    DevButton,
    DevCard
  },
  data () {
    return {
      cards,
      navTop,
      navBottom,
      large: 'lg',
      isNav: false,
      medium: 'md',
      largeTwo: '2x',
      popularTitle: 'Popular',
      gear: 'fa-solid fa-gear',
      faPlus: "fa-solid fa-plus",
      usernameTitle: 'Test Test',
      usernameSubtitle: '@ananas',
      cardButtonTitle: "Choose tags",
      transparentVariant: 'transparent',
      transparentButtonTitle: 'Add shortcuts',
      cardTitle: 'Get the content you need by creating a personal feed'
    }
  },
  computed: {
    ...mapGetters('navigation', ['getNav'])
  },
  methods: {
    ...mapActions('navigation',['setIsNav']),
    setNav () {
      this.setIsNav(false)
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
  height: 100vh;
  width: 28rem;
  background-color: $background-primary;

  &-wrapper {
    padding: 2.5rem 2.4rem 2rem;
  }

  &-header {
    display: flex;
    margin-bottom: 2rem;
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
    &-title {
      color: $white;
      font-weight: 700;
      line-height: 2rem;
      font-size: 1.5rem;
      margin-bottom: .2rem;
    }

    &-subtitle {
      font-size: 1.3rem;
      line-height: 1.8rem;
      margin-bottom: .2rem;
      color: $label-secondary;
    }
  }
}

.navigation-discussion {
  margin-bottom: 4rem;
}

li {
  padding: 1.3rem;

  &:hover {
    background-color: $background-active;
  }

  &:hover .discussion-link {
    color: $white;
  }
}

.discussion-link{
  display: flex;
  font-size: 1.5rem;
  color: $label-tertiary;
}

.icon-divider {
  width: 4rem;
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
  margin-bottom: 2.4rem;
  justify-content: center;
  box-shadow: $default-shadow;
  border: 1px solid $button-default;
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
  font-weight: 700;
  font-size: 1.7rem;
  line-height: 2.4rem;
}

.card-space {
  margin-bottom: 3.2rem;
}
</style>
