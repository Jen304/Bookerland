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
const isEmpty = ref(false);
const isLoadingSearchResult = ref(false);
const totalSearchResult = ref(0);
const maxLimit = 5;
// Get book list ref to do infinite scroll
// get search result when it scroll
const getSearchResultOnScroll = (element) => {
  const bookList = element.target;
  if (!bookList) return;
  const { scrollTop, scrollHeight, clientHeight } = bookList;
  if (scrollTop + clientHeight >= scrollHeight - 100) {
    getSearchResult(searchQuery.value);
  }
};

const getSearchResult = async (searchQuery) => {
  if (isLoadingSearchResult.value) return;
  const currentIndex = searchResult.value.length;
  // if (currentIndex >= totalSearchResult.value) return;
  isLoadingSearchResult.value = true;
  // get search result from google book api
  try {
    const requestQuery = new URLSearchParams({
      q: searchQuery,
      maxResults: maxLimit,
      currentIndex,
    });
    console.log(requestQuery.toString());
    const result = await fetch(`https://www.googleapis.com/books/v1/volumes?${requestQuery}`);
    const data = await result.json();
    const formattedData = data.items.map((item) => {
      const { id, volumeInfo, categories, publishedDate } = item;
      const publishedYear = publishedDate ? publishedDate.split('-')[0] : '';
      const { title, subtitle, authors, description, imageLinks } = volumeInfo;
      return {
        id,
        title,
        subtitle,
        authors,
        description,
        img: imageLinks ? imageLinks.thumbnail : '',
        categories,
        year: publishedYear,
      };
    });
    searchResult.value.push(...formattedData);
    totalSearchResult.value = data.totalItems;
    isLoadingSearchResult.value = false;
    isEmpty.value = data.totalItems === 0;
  } catch (error) {
    console.warn(error);
  }
};
onMounted(() => {
  getSearchResult(searchQuery.value);
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
    <main :class="['f-w-container row flex-align-center', $style['search-view']]">
      <!-- <MainLoadingBar /> -->
      <div
        :class="[
          'm-auto',
          {
            'col-6': !isBookDetailOpen,
            'col-5': isBookDetailOpen,
          },
        ]"
      >
        <div>
          <!-- Search result larger than 0, and isLoadingSearchResult is False -->
          <h1 class="body-text-large text-semi-bold" v-if="totalSearchResult > 0">
            About {{ totalSearchResult }} books found
          </h1>
          <ul
            :class="['no-list-style d-flex', $style['book-list']]"
            @scroll="getSearchResultOnScroll"
          >
            <li v-for="book in searchResult" :key="book.id">
              <BookCard :value="book" @click="openBookDetail(book)" />
            </li>
            <MainLoadingBar v-if="isLoadingSearchResult" />
          </ul>
        </div>
        <div :class="$style['empty-result']" v-if="isEmpty">
          <img src="@/asset/book-thinking.png" alt="empty result" />
          <h1>Sorry! No result found :(</h1>
          <p class="sub-heading-1">Please try another keyword</p>
        </div>
      </div>
      <div :class="['col-7', $style['book-detail']]" v-show="isBookDetailOpen">
        <BookDetail @close="closeBookDetail" :value="bookDetailValue" />
      </div>
    </main>
  </MainLayout>
</template>
<style module>
.search-view {
  --base-gap: calc(var(--base-spacing) * 8);
  margin-top: var(--base-spacing);
}
.book-list {
  gap: calc(var(--base-spacing) * 3);
  flex-direction: column;
  margin-block: calc(var(--base-spacing) * 2);
  max-height: 82vh;
  overflow-y: auto;
}
.book-detail {
  max-height: 88vh;
  overflow-y: auto;
}
.empty-result {
  margin: auto;
  text-align: center;
  margin: auto;
}
.empty-result img {
  max-width: 48rem;
  margin: auto;
  display: block;
  margin-block: calc(var(--base-spacing) * 2);
}
.empty-result h1,
.empty-result p {
  margin: auto;
  text-align: center;
}
</style>
