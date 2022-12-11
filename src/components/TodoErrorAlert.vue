<script setup lang="ts">
type Prop = {
  errors: String;
};

defineProps<Prop>();
</script>
<template>
  <v-container v-if="errors.length !== 0">
    <v-alert
      v-if="errors.length !== 0"
      density="compact"
      type="error"
      variant="tonal"
    >
      {{ errors }}
    </v-alert>
  </v-container>
</template>
