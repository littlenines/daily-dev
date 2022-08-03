<template>
  <button class="btn btn-small">
    <font-awesome-icon icon="fa-solid fa-plus" class="fa-lg" />
    &ensp;Choose tags
  </button>
</template>

<script>
export default {
    props: {
        title: {
            String
        }
    }
}
</script>

<style lang="scss" scoped>
.btn {
    border: none;
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;
    background-color: $button-default;

    &:hover {
        background-color: $button-hover;
        box-shadow: $button-hover-shadow;
    }
}

.btn-small {
    height: 3.2rem;
    padding: 0 1.5rem;
    border-radius: 1rem;
}
</style>