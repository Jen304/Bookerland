<script setup>
import BaseIcon from '@/component/BaseIcon.vue';
defineProps({
  prefixIcon: {
    type: String,
    default: '',
  },
});
</script>
<template>
  <div :class="$style['base-input']">
    <slot name="inner-left">
      <BaseIcon v-if="prefixIcon" :class="$style['prefix-icon']" :iconName="prefixIcon" />
    </slot>
    <input v-bind="$attrs" />
    <slot name="inner-right"> </slot>
  </div>
</template>

<style module>
.base-input {
  height: 4rem;
  background: var(--color-neutral-50);
  border-radius: var(--base-border-radius);
  border: 0.1rem solid var(--color-neutral-200);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--base-spacing);
}
.base-input:focus-within {
  border-color: var(--color-primary-active);
}
.base-input input {
  border: none;
  border-color: transparent;
  flex-grow: 1;
  color: var(--color-text-body);
  caret-color: var(--color-primary-active);
}
.base-input input:focus {
  outline: none;
}
.base-input input::placeholder {
  color: var(--color-neutral-400);
}
.base-input .prefix-icon {
  color: var(--color-neutral-400);
  margin-left: calc(var(--base-spacing) * 1.5);
}
.base-input:focus-within .prefix-icon {
  color: var(--color-primary-active);
}
</style>
