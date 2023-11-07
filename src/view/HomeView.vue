<script setup>
// import components
import MainLayout from './layout/MainLayout.vue';
import MainHeader from '@/component/MainHeader.vue';
import BookSearchBar from '@/component/BookSearchBar.vue';
</script>

<template>
  <MainLayout>
    <template #header>
      <MainHeader only-nav />
    </template>
    <main>
      <BookSearchBar />
    </main>
  </MainLayout>
</template>
