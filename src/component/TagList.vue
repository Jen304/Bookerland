<script setup>
// Props
const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <ul :class="['no-list-style d-flex', $style['tag-list']]">
    <li v-for="tag in props.list" :key="tag">
      {{ tag }}
    </li>
  </ul>
</template>
<style module>
.tag-list {
  gap: var(--base-spacing);
  /* wrap */
  flex-wrap: wrap;
}
.tag-list li {
  min-width: 7rem;
  text-align: center;
  background-color: var(--color-neutral-100);
  padding: var(--base-spacing) calc(var(--base-spacing) * 1.5);
  border-radius: calc(var(--base-border-radius) * 2);
  color: var(--color-neutral-500);
  font-size: var(--font-size-small);
  margin-bottom: var(--base-spacing);
}
</style>
