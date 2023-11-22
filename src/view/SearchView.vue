<script setup>
import { provide, watch, ref, onMounted } from 'vue';
import MainLayout from './layout/MainLayout.vue';
import MainLoadingBar from '@/component/MainLoadingBar.vue';

const props = defineProps({
  query: {
    type: String,
    default: '',
  },
});
const searchQuery = ref(props.query);
const searchResult = ref([]);
const isLoadingSearchResult = ref(false);
const totalSearchResult = ref(0);
const getSearchResult = async (searchQuery) => {
  if (isLoadingSearchResult.value) return;
  isLoadingSearchResult.value = true;
  // get search result from google book api
  const requestQuery = new URLSearchParams({
    q: searchQuery,
  });
  const result = await fetch(`https://www.googleapis.com/books/v1/volumes?${requestQuery}`);
  const data = await result.json();
  searchResult.value = data.items;
  totalSearchResult.value = data.totalItems;
  isLoadingSearchResult.value = false;
};
onMounted(() => {
  getSearchResult(searchQuery);
});

provide('searchQuery', searchQuery);
watch(
  () => props.query,
  (query) => {
    searchQuery.value = query;
    getSearchResult(query);
  },
);
</script>
<template>
  <MainLayout>
    <main>
      <MainLoadingBar v-if="isLoadingSearchResult" />
      <section v-else>About {{ totalSearchResult }} books found</section>
    </main>
  </MainLayout>
</template>
