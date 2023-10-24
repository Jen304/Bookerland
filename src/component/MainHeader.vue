<script setup></script>
<template>
  <header>
    <img src="@/asset/logo.png" alt="logo" />
    <nav :class="$style['main-header__container']">
      <ul>
        <li>
          <router-link to="/about">About project</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style module>
.main-header__container ul {
  list-style-type: none;
}
.main-header__container a {
  text-decoration: none;
  color: var(--color-secondary-active);
  font-weight: 600;
}
</style>
