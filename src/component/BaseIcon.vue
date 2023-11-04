<script setup>
defineProps({
  iconName: {
    type: String,
    default: '',
  },
});
</script>
<template>
  <i class="material-symbols-rounded" v-bind="$attrs"> {{ iconName }} </i>
</template>
