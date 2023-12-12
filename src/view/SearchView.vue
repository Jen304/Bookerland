<script setup>
import { provide, watch, ref, onMounted } from 'vue';
import MainLayout from './layout/MainLayout.vue';
import MainLoadingBar from '@/component/MainLoadingBar.vue';
import BookCard from '@/component/BookCard.vue';
import BookDetail from '@/component/BookDetail.vue';
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
// open close book detail
const isBookDetailOpen = ref(false);
const openBookDetail = (value) => {
  bookDetailValue.value = value;
  isBookDetailOpen.value = true;
};
const closeBookDetail = () => {
  isBookDetailOpen.value = false;
};
const bookDetailValue = ref(null);
</script>
<template>
  <MainLayout>
    <main class="f-w-container row flex-align-center">
      <!-- <MainLoadingBar /> -->
      <div class="col-6 m-auto">
        <MainLoadingBar v-if="isLoadingSearchResult" />
        <div v-else>
          <h1 class="body-text-large text-semi-bold">About {{ totalSearchResult }} books found</h1>
          <ul :class="['no-list-style d-flex', $style['book-list']]">
            <li v-for="book in searchResult" :key="book.id">
              <BookCard :value="book" @click="openBookDetail(book)" />
            </li>
          </ul>
        </div>
      </div>
      <div class="col-6" v-show="isBookDetailOpen">
        <BookDetail @close="closeBookDetail" :value="bookDetailValue" />
      </div>
    </main>
  </MainLayout>
</template>
<style module>
.book-list {
  gap: calc(var(--base-spacing) * 3);
  flex-direction: column;
}
</style>
