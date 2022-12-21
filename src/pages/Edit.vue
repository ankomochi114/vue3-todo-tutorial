<script setup lang="ts">
import { ref } from "vue";
import { useTodosStore } from "../store/todos";
import router from "../router";

type Prop = {
  id: String;
};
const props = defineProps<Prop>();

const store = useTodosStore();

const inputText = ref(store.todos[Number(props.id)]);

const form = ref(true);
const loading = ref(false);
const errors = ref("");
/**
 * タスクの編集処理
 */
const onSubmit = () => {
  if (!form) return;

  if (inputText.value.length === 0)
    return (errors.value = "文字を入力してください");

  loading.value = true;
  store.editTodo(Number(props.id), inputText.value);
  loading.value = false;
  errors.value = "";
  router.back();
};
</script>

<template>
  <p>編集モード</p>
  <v-form v-model="form" @submit.prevent="onSubmit">
    <v-row align="center">
      <v-col cols="12" md="8">
        <v-text-field
          clearable
          label="Label"
          hide-details="auto"
          v-model="inputText"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-btn color="success" class="mr-4" type="submit">編集</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
