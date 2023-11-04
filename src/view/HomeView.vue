<script setup>
// import components
import MainLayout from './layout/MainLayout.vue';
import BaseInput from '@/component/BaseInput.vue';
import BaseButton from '@/component/BaseButton.vue';
</script>

<template>
  <MainLayout>
    <main>
      <base-input prefix-icon="search" placeholder="hello">
        <template #inner-right>
          <base-button>Search</base-button>
        </template>
      </base-input>
    </main>
  </MainLayout>
</template>
