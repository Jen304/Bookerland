<script setup>
import BaseInput from '@/component/BaseInput.vue';
import BaseButton from '@/component/BaseButton.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// define refs
const searchBarRef = ref('');
const router = useRouter();
const onSubmit = () => {
  router.push({ name: 'search', query: { q: searchBarRef.value } });
};
</script>
<template>
  <form @submit.prevent="onSubmit">
    <base-input prefix-icon="search" placeholder="Search book" clearable v-model="searchBarRef">
      <template #inner-right>
        <base-button :class="$style['search-button']" type="submit">Search</base-button>
      </template>
    </base-input>
  </form>
</template>
<style module>
.search-button {
  height: 100%;
  width: 8.8rem;
}
</style>
