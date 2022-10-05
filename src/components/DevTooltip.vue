<template>
    <div class="tooltip"><slot></slot>
        <span :class="['tooltiptext', positionTooltip, sizeTooltip]">{{ label }}</span>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String
        },
        position: {
         type: String,
         default: 'left',
         validator: (value) => {
             return ['left', 'right', 'bottom', 'top'].indexOf(value) > -1
         }
        },
        size: {
         type: String,
         default: 'md',
         validator: (value) => {
             return ['sm', 'md'].indexOf(value) > -1
         }
        },
    },
    computed: {
        positionTooltip () {
            return this.$props.position
        },
        sizeTooltip () {
            return this.$props.size
        }
    }
}
</script>

<style lang="scss" scoped>
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  top: .4rem;
  z-index: 1;
  color: $black;
  padding: .7rem 0;
  font-size: 1.2rem;
  position: absolute;
  visibility: hidden;
  text-align: center;
  border-radius: 1rem;
  background-color: $white;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 50%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
}
.tooltip:hover .tooltiptext {
    visibility: visible;
}

.left {
    right: 110%;
}

.left::after {
    left: 99%;
    border-color: transparent transparent transparent $white;
}

.right {
    left: 110%;
}

.right::after {
    right: 99%;
    border-color: transparent $white transparent transparent;
}

.sm {
    width: 6rem;
}

.md {
    width: 10rem;
}
</style>