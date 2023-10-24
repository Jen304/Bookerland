<script setup>
import MainHeader from '@/component/MainHeader.vue';
</script>

<template>
  <slot name="header">
    <MainHeader></MainHeader>
  </slot>
  <slot></slot>
</template>
