<template>
  <button :class="['btn', btnSize, {block}, variantClass]">
    <font-awesome-icon  v-if="isIconLeft" :icon="iconLeft"  :size="iconSize"/>
    &ensp;<slot>Add</slot>&ensp;
    <font-awesome-icon  v-if="isIconRight" :icon="iconRight" :size="iconSize" />
  </button>
</template>

<script>
export default {
    props: {
        variant: {
            type: String,
            default: 'default'
        },
        isIconLeft: {
            type: Boolean,
            default: false
        },
        isIconRight: {
            type: Boolean,
            default: false
        },
        iconLeft: {
            type: String
        },
        iconRight: {
            type: String
        },
        iconSize: {
            type: String,
            default: 'sm',
            validator: (value) => {
                const fontSizes = ['xs','sm', 'lg', '2x', '3x', '5x','7x', '10x']
                return fontSizes.indexOf(value) > -1
            }
        },
        btnSize: {
            type: String,
            default: 'sm',
            validator: (value) => ['sm','md','lg'].indexOf(value) > -1
        },
        block: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        variantClass () {
            return 'btn-' + this.$props.variant
        }
    }
}
</script>

<style lang="scss" scoped>
.btn {
    border: none;
    display: flex;
    cursor: pointer;
    font-weight: 700;
    font-size: 1.5rem;
    align-items: center;

    &.sm,
    &.md,
    &.lg {
        height: 3.2rem;
        padding: 0 1.5rem;
        border-radius: 1rem;
    }

    &.md {
        height: 4rem;
        padding: 0 2.3rem;
    }

    &.lg {
        height: 4.5rem;
    }

    &.block {
        width: 100%;
    }

    &-default {
        background-color: $button-default;

     &:hover {
        background-color: $button-hover;
        box-shadow: $button-hover-shadow;
     }
    }

    &-transparent {
        color: $label-tertiary;
        background-color: transparent;

     &:hover {
        color: $white;
        background-color: $button-hover-transparent;
     }
    }
    
}
</style>