<template>
  <button :class="['icon', variantClass, iconSize]">
    <font-awesome-icon   :icon="icon" :size="size" />
  </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true
        },
        iconSize: {
            type: String,
            default: 'sm'
        },
        size: {
            type: String,
            default: 'sm',
            validator: (value) => {
                const fontSizes = ['xs','sm', 'lg', '2x', '3x', '5x','7x', '10x']
                return fontSizes.indexOf(value) > -1
            }
        },
        variant: {
            type: String,
            default: 'default'
        },
    },
    computed: {
        variantClass () {
            return 'icon-' + this.$props.variant
        }
    }
}
</script>

<style lang="scss" scoped>
    .icon {
        border: none;
        &.sm {
            width: 3.2rem;
            height: 3.2rem;
            padding: 0;
            border-radius: 1rem;
        }

        &-default {
            background-color: transparent;
            color: $label-tertiary;
            &:hover {
                background-color: $button-hover-transparent;
                color: $white;
            }
        }
    }
</style>