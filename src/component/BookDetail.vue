<script setup>
import BaseIcon from '@/component/BaseIcon.vue';
import BaseButton from '@/component/BaseButton.vue';
import TagList from '@/component/TagList.vue';
import { computed } from 'vue';
const props = defineProps({
  value: {
    type: [Object, null],
    required: true,
  },
});
const displayValue = computed(() => {
  if (!props.value) return {};
  const value = props.value.volumeInfo;

  const publishedYear = value.publishedDate.split('-')[0];
  return {
    title: value.title,
    subtitle: value.subtitle,
    author: value.authors,
    img: value.imageLinks.thumbnail,
    description: value.description,
    year: publishedYear,
    categories: value.categories,
  };
});
const emit = defineEmits(['close']);
const onClose = () => {
  emit('close');
};
</script>
<template>
  <section :class="$style['book-detail']">
    <BaseIcon name="close" @click="onClose" :class="[$style['close-button'], 'cursor-pointer']" />
    <div :class="[$style['brief-info'], 'd-flex']">
      <img :src="displayValue.img" alt="book cover" />
      <div>
        <!-- Title -->
        <h1 class="heading-1">{{ displayValue.title }}</h1>
        <h2 class="sub-heading-1">{{ displayValue.subtitle }}</h2>
        <div :class="[$style['metadata'], 'd-flex f-column body-text-regular']">
          <!-- Author -->
          <ul class="inline-list">
            By
            <li v-for="author in displayValue.author" :key="author">
              {{ author }}
            </li>
          </ul>
          <!-- Year -->
          <span :class="$style['year']"> {{ displayValue.year }}</span>
          <!-- Categories -->
          <TagList :list="displayValue.categories" />
        </div>
      </div>
    </div>
    <div>
      <h3 class="heading-2">Description</h3>
      <p :class="['body-text-regular']">{{ displayValue.description }}</p>
    </div>
    <BaseButton display-type="secondary">Read more on Google Book</BaseButton>
  </section>
</template>
<style module>
.book-detail {
  background-color: var(--color-neutral-50);
  gap: calc(var(--base-spacing) * 2);
  padding: calc(var(--base-spacing) * 3);
}
.book-detail .close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
.brief-info {
  gap: calc(var(--base-spacing) * 2);
}
.brief-info h1 {
  margin-top: calc(var(--base-spacing) * 2);
}
.book-detail img {
  width: 100%;
  aspect-ratio: 2 / 2.8;
  flex: 1 0 33%;
  border-radius: var(--base-border-radius);
  box-shadow: 0px 0px 4px 2px rgba(111, 132, 129, 0.5);
}
/* Add comma between item list */
.metadata ul:first-child li:not(:last-child)::after {
  content: ',';
}
.book-detail .metadata {
  margin-top: calc(var(--base-spacing) * 1.5);
  color: var(--color-neutral-500);
  gap: calc(var(--base-spacing) / 2);
}
/* last child of metadata */
.book-detail .metadata > *:last-child {
  margin-top: calc(var(--base-spacing) * 0.5);
}
.book-detail .year:before {
  content: '•';
  margin-right: 0.5rem;
}
/* Style like a pill */
.book-detail .categories {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  background-color: var(--color-neutral-100);
}
.book-detail h3 {
  margin-top: calc(var(--base-spacing) * 3);
  margin-bottom: calc(var(--base-spacing) * 0.5);
}
.book-detail button {
  margin: auto;
  margin-top: calc(var(--base-spacing) * 2);
}
</style>
