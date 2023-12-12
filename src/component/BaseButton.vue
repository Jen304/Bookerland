<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'regular',
    validator: (value) => {
      return ['regular'].includes(value);
    },
  },
  displayType: {
    type: String,
    default: 'primary',
    validator: (value) => {
      return ['primary', 'secondary'].includes(value);
    },
  },
});
</script>

<template>
  <button :class="[$style['base-button']]" v-bind="$attrs" :data-style="props.displayType">
    <slot></slot>
  </button>
</template>

<style module>
.base-button {
  border-radius: var(--base-border-radius);
  display: flex;
  height: 3.8rem;
  padding: 0 2rem;
  justify-content: center;
  align-items: center;
  gap: calc(var(--base-spacing) / 2);
  font-weight: 600;
  transition: all 0.2s ease-in-out;
}
.base-button[data-style='primary'] {
  background: var(--color-primary-button);
  color: var(--color-neutral-100);
  border: none;
}
.base-button[data-style='secondary'] {
  /* outlined */
  background: transparent;
  border: 1px solid var(--color-neutral-300);
  color: var(--color-accent-700);
}
.base-button:hover {
  filter: brightness(1.1);
}
.base-button:focus {
  outline-color: var(--color-primary-active);
}
.base-button[data-style='secondary']:hover {
  border-color: var(--color-accent-500);
}
.base-button[data-style='secondary']:focus {
  border-color: var(--color-accent-800);
}
</style>
