<script setup lang="ts">
import { ref } from "vue";

type Prop = {
  modelValue: String;
  onSubmit: () => string | undefined;
  clearDoneTodos: () => {};
};

defineProps<Prop>();
const emit = defineEmits(["update:modelValue"]);

const form = ref(true);
const loading = ref(false);
</script>

<template>
  <v-form v-model="form" @submit.prevent="onSubmit">
    <v-row align="center">
      <v-col cols="12" md="8">
        <v-text-field
          :model-value="modelValue"
          @input="emit('update:modelValue', $event.target.value)"
          clearable
          label="Label"
          hide-details="auto"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-btn color="success" class="mr-4" type="submit" :loading="loading">
          追加
        </v-btn>
        <v-btn
          color="primary"
          class="mr-4"
          :loading="loading"
          @click="clearDoneTodos"
        >
          完了済みを削除する
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
