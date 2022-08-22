<template>
  <div class="card">
    <div v-if="!promoted" class="card-header">
      <slot name="header">
        <a href="/">
          <img :src="image" alt="logo">
        </a>
        <DevButton icon :ico="ico" :iconSize="size"/>
      </slot>
    </div>
    <div class="card-info">
      <slot name="info">
        <h3 class="card-info-title">{{ title }}</h3>
      </slot>
    </div>
    <div class="flex-1"></div>
    <div class="card-info">
      <p v-if="date" class="card-info-subtitle">{{ date }} &bullet; {{ time }} read time</p>
    </div>
    <div :class="['card-image', {'promoted-laptop': promoted}]">
      <img :src="hero" alt="hero">
    </div>
    <div v-if="!promoted" class="card-footer">
      <slot name="footer">
        <DevButton icon :ico="iconStart" :iconSize="size" :variant="success" :label="iconLabel[0]"/>
        <DevButton icon :ico="iconMiddle" :iconSize="size" :variant="success" :label="iconLabel[1]"/>
        <DevButton icon :ico="iconEnd" :iconSize="size" :variant="warning" :label="iconLabel[2]"/>
      </slot>
    </div>
    <div v-else class="card-promoted">
      <p>{{ promotedTitle }}</p>
    </div>
  </div>
</template>

<script>
import DevButton from '@/components/DevButton.vue'
export default {
  components: {
    DevButton
  },
  props: {
    image: {
      type: String,
      default: ''
    },
    ico: {
      type: String,
      default: 'fa-solid fa-ellipsis-vertical'
    },
    title: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: ''
    },
    hero: {
      type: String,
      default: '',
      required: true
    },
    promoted: {
      type: Boolean,
      default: false
    },
    iconStart: {
      type: String
    },
    iconMiddle: {
      type: String
    },
    iconEnd: {
      type: String
    },
    iconLabel: {
      type: Array
    }
  },
  data () {
    return {
      size: '2x',
      success: 'success',
      warning: 'warning',
      promotedTitle: 'Promoted'
    }
  }

}
</script>

<style lang="scss" scoped>
  .card {
    padding: .8rem;
    border-radius: 1.6rem;
    box-shadow: $card-shadow;
    border: 1px solid $divider;
    background-color: $background-secondary;
    @include md {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    &:hover {
      border-color: $divider-secondary;
    }

    &-info-title {
     color: $white;
     font-size: 2rem;
     font-weight: 700;
     line-height: 2.6rem; 
     word-break: break-word;
    }
  }

  .card-header {
    display: flex;
    margin: .8rem 0;
    padding: 0 1.6rem;
    align-items: center;
    justify-content: space-between;

    img {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 2rem;
    }
  }

  .card-info {
    padding: 0 1.6rem;

    &-title {
      margin-bottom: .8rem;
    }

  }

  .card-info-subtitle {
    font-size: 1.3rem;
    line-height: 1.8rem;
    margin-bottom: 3.2rem;
    color: $label-tertiary;
    @include md {
      margin-bottom: unset;
    }
  }

  .card-image {
    margin: 1rem 0;

    img {
      width: 100%;
      height: 16rem;
      object-fit: cover;
      border-radius: 1.2rem;
    }
  }

  .card-footer {
    display: flex;
    padding: 0 1.6rem;
    justify-content: space-between;
  }

  .card-promoted {
    margin: .8rem 0;
    font-size: 1.3rem;
    padding: 0 1.6rem;
    line-height: 1.8rem;
    color: $label-tertiary;
  }

  .promoted-laptop {
    @include md {
      margin-top: 2.5rem;
    }
  }
</style>