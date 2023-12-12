<script setup>
import BaseInput from '@/component/BaseInput.vue';
import BaseButton from '@/component/BaseButton.vue';
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';
const searchQuery = inject('searchQuery', undefined);
// define refs
const searchInput = searchQuery ? ref(searchQuery.value) : ref('');
const router = useRouter();
const onSubmit = () => {
  router.push({ name: 'search', query: { q: searchInput.value } });
};
</script>
<template>
  <form @submit.prevent="onSubmit">
    <BaseInput prefix-icon="search" placeholder="Search book" clearable v-model="searchInput">
      <template #inner-right>
        <BaseButton :class="$style['search-button']" type="submit">Search</BaseButton>
      </template>
    </BaseInput>
  </form>
</template>
<style module>
.search-button {
  height: 100%;
  width: 8.8rem;
}
</style>
