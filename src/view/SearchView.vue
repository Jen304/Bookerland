<script setup>
import { provide, watch, ref } from 'vue';
import MainLayout from './layout/MainLayout.vue';
import MainLoadingBar from '@/component/MainLoadingBar.vue';

const props = defineProps({
  query: {
    type: String,
    default: '',
  },
});
const searchQuery = ref(props.query);
provide('searchQuery', searchQuery);
watch(
  () => props.query,
  (query) => {
    searchQuery.value = query;
  },
);
</script>
<template>
  <MainLayout>
    <main>
      <section>This is search page</section>
      <MainLoadingBar />
    </main>
  </MainLayout>
</template>
