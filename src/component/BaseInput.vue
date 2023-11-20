<script setup>
import BaseIcon from '@/component/BaseIcon.vue';
import { computed, ref } from 'vue';
const props = defineProps({
  prefixIcon: {
    type: String,
    default: '',
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: '',
  },
});
const emit = defineEmits(['update:modelValue']);
const hasClearButton = computed(() => props.clearable && inputValue.value.length > 0);
// clear input value when clear button is clicked
const clearInputValue = () => {
  emit('update:modelValue', '');
};

const inputValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
const input = ref(null);
// Focus input when prefix icon is clicked
const focusInput = () => {
  input.value.focus();
};
</script>
<template>
  <div :class="$style['base-input']" @click="focusInput">
    <slot name="inner-left">
      <BaseIcon v-if="prefixIcon" :class="$style['prefix-icon']" :iconName="prefixIcon" />
    </slot>
    <input v-bind="$attrs" v-model="inputValue" ref="input" />
    <BaseIcon
      v-if="hasClearButton"
      iconName="close"
      @click.stop="clearInputValue"
      :class="$style['clear-icon']"
    />
    <slot name="inner-right"> </slot>
  </div>
</template>

<style module>
.base-input {
  height: 4.8rem;
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
.base-input input::placeholder,
.base-input i {
  color: var(--color-neutral-400);
}
.base-input .prefix-icon {
  margin-left: calc(var(--base-spacing) * 1.5);
}
.base-input .clear-icon {
  cursor: pointer;
  margin-right: calc(var(--base-spacing) * 0.5);
}
.base-input:focus-within .prefix-icon {
  color: var(--color-primary-active);
}
</style>
