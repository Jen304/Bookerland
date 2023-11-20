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
          <div>
            <img src="@/asset/book-smile.png" alt="Book Smile" />
            <p class="heading-2">Search your favorite books by enter keywords on the bar above</p>
          </div>
        </div>
      </section>
    </main>
  </MainLayout>
</template>
<style module>
.search-bar img[alt='logo'] {
  height: 6.4rem;
  margin: auto;
  display: block;
  margin-bottom: calc(var(--base-spacing) * 5);
}
.search-bar img[alt='Book Smile'] {
  margin: auto;
  margin-top: calc(var(--base-spacing) * 4);
  max-width: 28rem;
  height: 100%;
  display: block;
}
img[alt='Book Smile'] + p {
  color: var(--color-primary-900);
  text-align: center;
  margin: auto;
  margin-top: var(--base-spacing);
  max-width: 32rem;
}
.search-bar {
  justify-content: center;
  margin-top: calc(var(--base-spacing) * 10);
}
</style>
