<template>
  <main class="main" @scroll="handleScroll()">
    <!-- phone and tablet sidenav -->
    <Transition name="fade">
      <aside class="overlay" v-if="getNav" @click.self="setNav">
        <nav class="navigation" @click.self="isSettingsOpen = false">
          <div class="navigation-wrapper">
            <div class="navigation-header">
                <div class="user">
                    <img class="user-img" src="/img/logo-card.webp" alt="logo">
                    <p class="user-level primary-font text-white">10</p>
                </div>
              <DevButton icon 
                         :ico="gear" 
                         :iconSize="largeTwo" 
                         :size="medium" 
                         @click="openSettings"
              />
              <div class="navigation-modal" v-if="isSettingsOpen">
                <ul>
                  <li v-for="(item, index) in settings" :key="index" class="modal-list">
                    <a href="/" class="modal-link">
                      <font-awesome-icon :icon="item.icon" 
                                         class="modal-divider" 
                                         :size="large"
                      />
                      <p>{{ item.title }}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="navigation-username">
              <p class="navigation-username-title primary-font text-white">{{ usernameTitle }}</p>
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
    <!-- laptop and desktop sidenav -->
    <aside class="overlay-md">
        <nav class="navigation-md">
          <div class="navigation-md-hover-btn">
            <DevButton icon
                       :size="small"
                       :iconSize="large"
                       :ico="faChevronLeft"
                       :variant="whiteVariant"
            />
          </div>
          <div class="navigation-md-discussion">
            <ul>
              <li v-for="(item, index) in navTopDesktop" :key="index" :class="[!item.icon ? 'no-hover' : '']">
                <a href="/" class="discussion-link" v-if="item.icon">
                  <font-awesome-icon :icon="item.icon" class="icon-divider"/>
                  <p>{{ item.title }}</p>
                </a>
                <span v-else class="discussion-tab">{{ item.title }}</span>
              </li>
            </ul>
          </div>
          <div class="flex-1"></div>
          <div class="navigation-md-footer">
            <ul>
              <li v-for="(item, index) in navBottom" :key="index">
                <a href="/" class="discussion-link">
                  <font-awesome-icon :icon="item.icon" class="icon-divider"/>
                  <p>{{ item.title }}</p>
                </a>
              </li>
            </ul>
          </div>
          <div class="level align-center">
            <div class="level-image">
              <img src="/img/bronze.png" alt="level">
            </div>
            <div class="level-info">
              <span class="primary-font">{{ levelTitle }}</span>
              <p>Next level: {{ levelNext }}</p>
            </div>
          </div>
        </nav>
      </aside>
      <!-- sidenav end -->
    <div class="container">
      <div class="tag">
        <div class="tag-card">
          <p class="tag-card-title text-white">{{ cardTitle }}</p>
          <DevButton :iconStart="faPlus"
                     :iconSize="large">
                      {{ cardButtonTitle }}
          </DevButton>
        </div>
      </div>

      <div class="popular align-center">
        <h3 class="popular-title text-white">{{ popularTitle }}</h3>
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

    <div class="back-button">
      <DevButton icon
                back
                :size="extraLarge"
                :ico="faChevronUp"
                :iconSize="largeThree"
                :variant="whiteVariant"
                v-if="scroll >= 400"
      />
    </div>
    <div class="back-button-phone">
      <DevButton icon
               back
               :size="large"
               :ico="faChevronUp"
               :iconSize="largeTwo"
               :variant="whiteVariant"
               v-if="scroll >= 400"
      />
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'

import cards from '../../cards.json'
import settings from '../../settings.json'
import navTop from '../../navigation-top.json'
import navTopDesktop from '../../navigation-top-md.json'
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
      scroll: 0,
      small: 'sm',
      large: 'lg',
      isNav: false,
      medium: 'md',
      navTopDesktop,
      largeTwo: '2x',
      largeThree: '3x',
      extraLarge: 'xl',
      levelNext: 'Silver',
      levelTitle: 'Bronze',
      whiteVariant: 'white',
      isSettingsOpen: false,
      popularTitle: 'Popular',
      gear: 'fa-solid fa-gear',
      faPlus: "fa-solid fa-plus",
      usernameTitle: 'Test Test',
      usernameSubtitle: '@ananas',
      cardButtonTitle: "Choose tags",
      transparentVariant: 'transparent',
      faChevronUp: "fa-solid fa-chevron-up",
      transparentButtonTitle: 'Add shortcuts',
      faChevronLeft: "fa-solid fa-chevron-left",
      cardTitle: 'Get the content you need by creating a personal feed'
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed: {
    ...mapGetters('navigation', ['getNav'])
  },
  methods: {
    ...mapActions('navigation',['setIsNav']),

    handleScroll () {
      this.scroll = window.scrollY
    },
  
    setNav () {
      this.setIsNav(false)
      this.isSettingsOpen = false
    },

    openSettings () {
      if (this.isSettingsOpen === false) this.isSettingsOpen = true
      else this.isSettingsOpen = false
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
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: $theme-overlay;

  @include lg {
    display: none;
  }
}

.overlay-md {
  display: none;

    @include lg {
    display: block;
    position: fixed;
    left: 0;
    bottom: 0;
    top: 5rem;
  }
}

.navigation-md {
    width: 24rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-top: 1px solid $divider;
    border-right: 1px solid $divider;
    background-color: $background-primary;

  &:hover .navigation-md-hover-btn {
    display: block;
  }

  &-footer {
    @include md {
      padding: 1.5rem 0;
    }
  }
}

.navigation-md-hover-btn {
  position: absolute;
  top: 1rem;
  left: 22.5rem;
  display: none;
}

.navigation {
  width: 28rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: $background-primary;

  @include lg {
    width: 24rem;
    border-top: 1px solid $divider;
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

  @include lg {
    padding: .8rem;
  }

  &:hover {
    background-color: $background-active;
  }

  &:hover .discussion-link {
    color: $white;
  }

}

.no-hover {
  &:first-child {
    margin-top: 2rem;
  }
  &:hover {
    background-color: unset;
  }
}

.discussion-tab {
  margin-left: 1rem;
  pointer-events: none;
  color: $label-tertiary;
  @include custom-font(700, 1.3rem);
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
  @include custom-font(600, 1.2rem);
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
  padding: 0 2.4rem;
  justify-content: center;

  @include lg {
    padding: unset;
    margin: 0 0 0 24.5rem;
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
  text-align: center;
  margin-bottom: 1rem;
  @include custom-font(400, 1.3rem, 1.8rem);

  @include md {
    margin-bottom: unset;
    margin-right: 3.2rem;
  }
}

.popular {
  margin-bottom: 3rem;
}

.popular-title {
  flex: 1;
  @include custom-font(700, 1.7rem, 2.4rem);
}

.cards {
  margin-bottom: 3.2rem;
 @include md {
    width: 100%;
    display: grid;
    gap: 32px;
    grid-template-columns: repeat(2,minmax(0,1fr));
 }

 @include xl {
    grid-template-columns: repeat(3,minmax(0,1fr));
 }

 @include xxl {
    grid-template-columns: repeat(4,minmax(0,1fr));
 }

 @include xxxl {
    grid-template-columns: repeat(5,minmax(0,1fr));
 }

 @include k4 {
    grid-template-columns: repeat(6,minmax(0,1fr));
 }
}

.card-space {
  margin-bottom: 3.2rem;

  @include md {
    margin-bottom: unset;
  }
}

.level {
  padding: 1rem;
  cursor: pointer;
  border-radius: 1.2rem;
  margin: 0 1.5rem 1.5rem;
  border: 1px solid $level-2;
  background-color: $background-secondary;

  .level-image {
    padding-right: 1rem;

    img {
      width: 4rem;
    }
  }

  .level-info {
    span {
      color: $level-2;
    }

    p {
      font-size: 1.3rem;
      line-height: 1.8rem;
      color: $label-tertiary;
    }
  }
}

.back-button {
  display: none;
  
  @include lg {
    display: block;
  }
}

.back-button-phone {
  @include lg {
    display: none;
  }
}
</style>
