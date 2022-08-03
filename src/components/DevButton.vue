<template>
  <button :class="['btn', btnSize]">
    <font-awesome-icon  v-if="isIconLeft" :icon="iconLeft" :class="iconSize" />
    &ensp;<slot>Add</slot>&ensp;
    <font-awesome-icon  v-if="isIconRight" :icon="iconRight" :class="iconSize" />
  </button>
</template>

<script>
export default {
    props: {
        isIconLeft: {
            type: Boolean
        },
        isIconRight: {
            type: Boolean
        },
        iconLeft: {
            type: String
        },
        iconRight: {
            type: String
        },
        iconSize: {
            type: String,
            default: ''
        },
        btnSize: {
            type: String,
            default: 'btn-small'
        }
    }
}
</script>

<style lang="scss" scoped>
.btn {
    border: none;
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
    background-color: $button-default;

    &:hover {
        background-color: $button-hover;
        box-shadow: $button-hover-shadow;
    }

    &-small,
    &-medium,
    &-large {
        height: 3.2rem;
        padding: 0 1.5rem;
        border-radius: 1rem;
    }

    &-medium {
        height: 4rem;
    }

    &-large {
        height: 4.5rem;
    }
}

</style>