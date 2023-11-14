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
    <main class="f-w-container">
      <section :class="['row', $style['search-bar']]">
        <div class="col-6">
          <img src="@/asset/logo.png" alt="logo" />
          <BookSearchBar />
        </div>
      </section>
    </main>
  </MainLayout>
</template>
<style module>
.search-bar img {
  height: 5.4rem;
  margin: auto;
  display: block;
  margin-bottom: calc(var(--base-spacing) * 4);
}
.search-bar {
  justify-content: center;
  margin-top: calc(var(--base-spacing) * 8);
}
</style>
