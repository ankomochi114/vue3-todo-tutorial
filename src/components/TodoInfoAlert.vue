<script setup lang="ts">
type Prop = {
  todos: String[];
  alertText: String;
};

defineProps<Prop>();
</script>
<template>
  <v-container v-if="todos.length === 0">
    <v-alert
      v-if="todos.length === 0"
      density="compact"
      type="info"
      variant="tonal"
    >
      {{ alertText }}
    </v-alert>
  </v-container>
</template>
