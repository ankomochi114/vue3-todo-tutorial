<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from 'vue';

const todos: Ref<string[]> = ref([]);
const doneTodos: Ref<string[]>  = ref([]);

const form = ref(true);
const inputText = ref("");
const loading = ref(false);
const errors = ref("");

/** 
 * タスクの登録処理 
*/
const onSubmit = () => {
  
  if (!form) return;

  if (inputText.value.length === 0)
    return (errors.value = "文字を入力してください");
  
  loading.value = true;
  todos.value.unshift(inputText.value);
  inputText.value = "";
  loading.value = false;
};

/** 
 * 完了済みのタスクを削除
 * @return 新しいtodoリスト
 */
const clearDoneTodos = () => {
  return todos.value = todos.value.filter((todo) => doneTodos.value.every((element) => element !== todo))
};
</script>

<template>
  <v-container>
    <h1>My Todo App</h1>
    <v-container v-if="todos.length === 0">
        <v-alert
        v-if="todos.length === 0"
        density="compact"
        type="info"
        variant="tonal"
        >
        ToDoがまだありません。
        </v-alert>
    </v-container>
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
    <v-form v-model="form" @submit.prevent="onSubmit">
      <v-row>
        <v-col cols="12" md="8">
          <v-text-field
            v-model="inputText"
            clearable
            label="Label"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn
            color="success"
            class="mr-4"
            type="submit"
            :loading="loading"
          >
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
    <v-checkbox
      v-for="todo in todos"
      v-model="doneTodos"
      :label="todo"
      :value="todo"
    ></v-checkbox>
  </v-container>
</template>

<style>
body {
  background-color: #eee;
}
</style>
