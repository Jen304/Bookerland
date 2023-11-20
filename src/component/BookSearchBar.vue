<script setup>
import BaseInput from '@/component/BaseInput.vue';
import BaseButton from '@/component/BaseButton.vue';
import { ref } from 'vue';
// define refs
const bookSearchBarRef = ref('');
</script>
<template>
  <base-input prefix-icon="search" placeholder="Search book" clearable v-model="bookSearchBarRef">
    <template #inner-right>
      <base-button :class="$style['search-button']">Search</base-button>
    </template>
  </base-input>
</template>
<style module>
.search-button {
  height: 100%;
  width: 8.8rem;
}
</style>
