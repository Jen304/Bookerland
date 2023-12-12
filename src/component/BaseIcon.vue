<script setup>
defineProps({
  name: {
    type: String,
    default: '',
  },
});
</script>
<template>
  <i class="material-symbols-rounded" v-bind="$attrs"> {{ name }} </i>
</template>
