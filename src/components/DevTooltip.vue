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
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
}
.tooltip:hover .tooltiptext {
    visibility: visible;
}

.left {
    top: .4rem;
    right: 110%;
}

.left::after {
    top: 50%;
    left: 99%;
    border-color: transparent transparent transparent $white;
}

.right {
    top: -0.1rem;
    left: 110%;
}

.right::after {
    top: 50%;
    right: 99%;
    border-color: transparent $white transparent transparent;
}

.top {
    top: -3rem;
    bottom: 150%;
    display: inline-table;
    transform: translate(-30%);
}

.top::after {
    top: 119%;
    left: 50%;
    border-color: $white transparent transparent transparent;
}

.sm {
    width: 6rem;
}

.md {
    width: 10rem;
}
</style>