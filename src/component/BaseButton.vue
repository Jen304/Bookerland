<script setup>
defineProps({
  size: {
    type: String,
    default: 'regular',
    validator: (value) => {
      return ['regular'].includes(value);
    },
  },
});
</script>

<template>
  <button :class="$style['base-button']" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<style module>
.base-button {
  background: var(--color-primary-button);
  color: var(--color-neutral-100);
  border-radius: var(--base-border-radius);
  border: none;
  display: flex;
  height: 3.8rem;
  padding: 0 1.6rem;
  justify-content: center;
  align-items: center;
  gap: calc(var(--base-spacing) / 2);
  font-weight: 600;
}
.base-button:hover {
  filter: brightness(1.1);
}
.base-button:focus {
  outline-color: var(--color-primary-active);
}
</style>
