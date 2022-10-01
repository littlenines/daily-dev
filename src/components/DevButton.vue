<template>
  <!-- BUTTON -->
  <button v-if="!icon" :class="['btn', 'primary-font', 'align-center', size, variantButton, { block }]" @click="clickEvent">
    <font-awesome-icon  v-if="iconStart" :icon="iconStart"  :size="iconSize"/>
    &ensp;<slot>Add</slot>&ensp;
    <font-awesome-icon  v-if="iconEnd" :icon="iconEnd" :size="iconSize" />
  </button>
  <!-- ICON -->
  <div v-else :class="['btn-icon', 'align-center',{ back }]" @click="clickEvent">
    <button :class="['icon', variantIcon, size]" id="icon">
        <font-awesome-icon :icon="ico" :size="iconSize" />
    </button>
    <label for="icon" v-if="label" :class="['label', 'primary-font', variantLabel]">{{ label }}</label>
  </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        variant: {
            type: String,
            default: 'default',
            validator: (value) => {
                return ['default', 'success', 'warning', 'transparent','white'].indexOf(value) > -1
            }
        },
        iconStart: {
            type: String
        },
        iconEnd: {
            type: String
        },
        iconSize: {
            type: String,
            default: 'sm',
            validator: (value) => {
                const fontSizes = ['xs','sm', 'md', 'lg', '2x', '3x', '5x','7x', '10x']
                return fontSizes.indexOf(value) > -1
            }
        },
        size: {
            type: String,
            default: 'sm',
            validator: (value) => ['sm','md','lg','xl'].indexOf(value) > -1
        },
        block: {
            type: Boolean,
            default: false
        },
        icon: {
            type: Boolean,
            default: false
        },
        ico: {
            type: String
        },
        label: {
            type: String
        },
        back: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        variantButton () {
            return 'btn-' + this.$props.variant
        },
        variantIcon () {
            return 'icon-' + this.$props.variant
        },
        variantLabel () {
            return 'label-' + this.$props.variant
        }
    },
    methods: {
        clickEvent () {
            this.$emit('click')
        }
    }
}
</script>

<style lang="scss" scoped>
.btn {
    border: none;
    cursor: pointer;

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

.btn-icon {
    color: $label-tertiary;

    &:hover .icon-default {
        color: $white;
        background-color: $button-hover-transparent;
    }

    &:hover .icon-success {
        color: $success;
        background-color: $success-hover;
    }

    &:hover .icon-warning {
        color: $warning;
        background-color: $warning-hover;
    }

    &:hover .icon-fancy {
        color: $button-default;
        border-color: $button-default;
        background-color: $fancy-background-hover;
        box-shadow: $button-hover-shadow;
    }

    &:hover .label-default {
        color: $white;
    }

    &:hover .label-warning {
        color: $warning;
    }

    &:hover .label-success {
        color: $success;
    }

    .icon {
        border: none;
        cursor: pointer;
        color: $label-tertiary;
        background-color: transparent;

        &.sm,
        &.md,
        &.lg,
        &.xl {
            padding: 0;
            width: 3.2rem;
            height: 3.2rem;
            border-radius: 1rem;
        }

        &.md {
            width: 4rem;
            height: 4rem;
            border-radius: 1.2rem;
        }

        &.lg {
            width: 4.3rem;
            height: 4.3rem;
            border-radius: 1.2rem;
        }

        &.xl {
            width: 6.5rem;
            height: 6.5rem;
            border-radius: 2rem;
        }

        &.icon-white {
            color: $black;
            background-color: $white;
        }

        &.icon-fancy {
            color: $button-default;
            background-color: $transparent;
            border: 1px solid $button-default;
        }
    }

    .label {
        padding-left: .5rem;
    }
}

.back {
    bottom: 6rem;
    right: 1.5rem;
    position: fixed;

    @include lg {
        bottom: 3rem;
    }
}
</style>