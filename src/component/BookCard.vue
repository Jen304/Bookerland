<script setup>
import { computed } from 'vue';
const props = defineProps({
  value: {
    type: Object,
    required: true,
  },
});
const valueData = computed(() => {
  const value = props.value;
  return value;
});
</script>
<template>
  <div :class="[$style['book-card'], 'd-flex h-center']" v-bind="$attrs">
    <img :src="valueData.img" alt="book cover" />
    <!-- Title -->
    <div :class="$style['content']">
      <div :class="['d-flex f-column', $style['metadata']]">
        <h2 class="heading-2">{{ valueData.title }}</h2>
        <p class="body-text-large">{{ valueData.subtitle }}</p>
        <!-- Author -->
        <ul class="inline-list body-text-regular">
          By
          <li v-for="author in valueData.author" :key="author">
            {{ author }}
          </li>
        </ul>
      </div>
      <p :class="['body-text-regular', $style['description']]">{{ valueData.description }}</p>
    </div>
  </div>
</template>
<style module>
.book-card {
  width: 100%;
  gap: calc(var(--base-spacing));
  align-items: flex-start;
  background: var(--color-neutral-50);
  border-radius: var(--base-border-radius);
  cursor: pointer;
}
.book-card:hover {
  background: var(--color-neutral-100);
}
.book-card img {
  width: 100%;
  aspect-ratio: 2 / 3;
  flex-basis: 25%;
  border-radius: var(--base-border-radius);
  box-shadow: 0px 0px 4px 2px rgba(111, 132, 129, 0.5);
}
.book-card .content {
  padding: calc(var(--base-spacing) * 1.5);
  flex-basis: 75%;
}
.book-card h2,
.book-card p {
  margin: 0;
}
.book-card .metadata {
  gap: calc(var(--base-spacing) * 0.5);
}
.book-card .metadata > * {
  margin: 0;
  padding: 0;
}
.book-card .metadata ul {
  color: var(--color-neutral-500);
}
/* Add comma between item list */
.book-card .metadata ul li:not(:last-child)::after {
  content: ',';
}
.book-card .description {
  color: var(--color-neutral-500);
  /* Showing max 3 lines */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: var(--base-spacing);
}
</style>
