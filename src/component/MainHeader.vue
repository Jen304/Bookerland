<script setup>
import BookSearchBar from '@/component/BookSearchBar.vue';
defineProps({
  onlyNav: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <header
    :class="[
      $style['main-header'],
      'row f-w-container',
      {
        [$style['only-nav']]: onlyNav,
      },
    ]"
  >
    <div class="col-3" v-if="!onlyNav">
      <img src="@/asset/logo.png" alt="logo" />
    </div>
    <div class="col-6" v-if="!onlyNav">
      <slot>
        <!-- center slot -->
        <BookSearchBar />
      </slot>
    </div>
    <nav class="col-3">
      <ul class="no-list-style">
        <li>
          <router-link to="/about">About project</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style module>
.main-header {
  display: flex;
  align-items: center;
  height: 8.4rem;
}
.main-header img {
  height: 2.6rem;
}
.main-header nav ul {
  width: 100%;
  display: flex;
  gap: calc(var(--base-spacing) * 2);
  justify-content: flex-end;
}
.main-header nav li {
  display: block;
}
.main-header nav a {
  text-decoration: none;
  color: var(--color-secondary-active);
  font-weight: 600;
}
.main-header.only-nav nav {
  --width: 12;
}
</style>
