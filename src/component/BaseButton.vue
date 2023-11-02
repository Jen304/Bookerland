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
  border-radius: 8px;
  border: none;
  display: flex;
  height: 38px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: calc(var(--base-spacing) / 2);
}
</style>
