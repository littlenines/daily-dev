<template>
  <main class="main">
    <Transition name="fade">
      <aside class="overlay" v-if="getNav" @click.self="setNav">
        <nav class="navigation" @click.self="isSettingsOpen = false">
          <div class="navigation-wrapper">
            <div class="navigation-header">
                <div class="user">
                    <img class="user-img" src="/img/logo-card.webp" alt="logo">
                    <p class="user-level">10</p>
                </div>
              <DevButton icon :ico="gear" :iconSize="largeTwo" :size="medium" @click="openSettings"/>
              <div class="navigation-modal" v-if="isSettingsOpen">
                <ul>
                  <li v-for="(item, index) in settings" :key="index" class="modal-list">
                    <a href="/" class="modal-link">
                      <font-awesome-icon :icon="item.icon" class="modal-divider" :size="large"/>
                      <p>{{ item.title }}</p>
                    </a>
                  </li>
                </ul>
              </div>
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
          <div class="flex-1"></div>
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
    </Transition>
    <div class="container">
      <div class="tag">
        <div class="tag-card">
          <p class="tag-card-title">{{ cardTitle }}</p>
          <DevButton :iconStart="faPlus"
                    :iconSize="large">
                    {{ cardButtonTitle }}
          </DevButton>
        </div>
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
      
      <div class="cards">

      <div v-for="(card, index) in cards" :key="index" class="card-space">
        <a href="/"> 
          <DevCard :item="card" />
        </a>
      </div>
      </div>
    </div>
    <DevButton icon
               :ico="faChevronUp"
               :iconSize="largeTwo"
               :size="'lg'"
               :variant="'white'"
               back />
  </main>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'

import cards from '../../cards.json'
import settings from '../../settings.json'
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
      settings,
      navBottom,
      large: 'lg',
      isNav: false,
      medium: 'md',
      largeTwo: '2x',
      isSettingsOpen: false,
      popularTitle: 'Popular',
      gear: 'fa-solid fa-gear',
      faPlus: "fa-solid fa-plus",
      faChevronUp: "fa-solid fa-chevron-up",
      usernameTitle: 'Test Test',
      usernameSubtitle: '@ananas',
      cardButtonTitle: "Choose tags",
      windowWidth: window.innerWidth,
      transparentVariant: 'transparent',
      transparentButtonTitle: 'Add shortcuts',
      cardTitle: 'Get the content you need by creating a personal feed'
    }
  },
  created () {
      this.onResize()
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  beforeUnmount() { 
    window.removeEventListener('resize', this.onResize); 
  },
  computed: {
    ...mapGetters('navigation', ['getNav'])
  },
  methods: {
    ...mapActions('navigation',['setIsNav']),
    ...mapActions('desktop',['setIsDesktop']),
    setNav () {
      this.setIsNav(false)
      this.isSettingsOpen = false
    },
    openSettings () {
      if (this.isSettingsOpen === false) this.isSettingsOpen = true
      else this.isSettingsOpen = false
    },
    onResize() {
      this.windowHeight = window.innerWidth
      if (this.windowWidth >= 1024) { 
        this.setIsNav(true)
        this.setIsDesktop(true)
      } else {
        this.setIsNav(false)
        this.setIsDesktop(false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: .3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(-400px);
  @include md {
    transform: translateX(-800px);
  }
}

.fade-leave-from {
  transform: translateX(0px);
}

.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  cursor: pointer;
  background-color: $theme-overlay;
  @include lg {
    width: 0;
    height: 0;
    right: unset;
    width: unset;
    height:unset;
    top: 5.1rem;
    background-color: unset;
  }
}

.navigation {
  width: 28rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: $background-primary;
  @include lg {
    width: 24rem;
    border-right: 1px solid $divider;
  }

  &-wrapper {
    padding: 2.5rem 2.4rem 2rem;
  }

  &-header {
    display: flex;
    margin-bottom: 2rem;
    justify-content: space-between;
  }

  &-footer {
    @include md {
      padding: 1.5rem 0;
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

  &-modal {
    position: absolute;
    top: 6.8rem;
    left: 12rem;
    padding: .5rem 0;
    border-radius: 1.2rem;
    box-shadow: $card-shadow;
    border: 1px solid $divider-secondary;
    background-color: $background-secondary;
  }
}

.navigation-discussion {
  margin-bottom: 4rem;
  @include md {
    margin-bottom: unset;
  }
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

.modal-list{
  padding: .8rem 1rem;

  &:hover {
    border-radius: 1.2rem;
  }
}

.discussion-link,
.modal-link {
  display: flex;
  font-size: 1.5rem;
  color: $label-tertiary;
}

.modal-link {
  font-size: 1.2rem;
  font-weight: 600;
}

.icon-divider {
  width: 4rem;
}

.modal-divider {
  width: 2.5rem;
  padding-right: .5rem;
}

.main {
  display: flex;
  justify-content: center;
  padding: 0 2.4rem;
  @include lg {
    margin: 0 0 0 24.5rem;
    padding: unset;
  }
}

.tag {
  display: flex;
  justify-content: center;
  @include lg {
    margin-top: 8rem;
  }
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
  @include md {
    align-items: center;
  }
}

.tag-card-title {
  color: $white;
  font-weight: 400;
  font-size: 1.3rem;
  text-align: center;
  line-height: 1.8rem;
  margin-bottom: 1rem;
  @include md {
    margin-bottom: unset;
    margin-right: 3.2rem;
  }
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

.cards {
 @include md {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2,minmax(0,1fr));
    gap: 32px;
 }
 @include xl {
    grid-template-columns: repeat(3,minmax(0,1fr));
 }
}

.card-space {
  margin-bottom: 3.2rem;
  @include md {
    margin-bottom: unset;
  }
}
</style>
