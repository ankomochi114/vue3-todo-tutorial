<script setup lang="ts">
import TodoAdd from "@/components/TodoAdd.vue";
import TodoInfoAlert from "@/components/TodoInfoAlert.vue";
import TodoErrorAlert from "@/components/TodoErrorAlert.vue";
import { useTodosStore } from "../store/todos";
import { ref } from "vue";
import type { Ref } from "vue";

const form = ref(true);
const inputText = ref("");
const loading = ref(false);
const errors = ref("");

const store = useTodosStore();

/**
 * タスクの登録処理
 */
const onSubmit = () => {
  if (!form) return;

  if (inputText.value.length === 0)
    return (errors.value = "文字を入力してください");

  loading.value = true;
  store.addTodo(inputText.value);
  inputText.value = "";
  loading.value = false;
  errors.value = "";
};

/**
 * 完了済みのタスクを削除
 * @return 新しいtodoリスト
 */
const clearDoneTodos = () => {
  store.doneTodo();
};
</script>

<template>
  <TodoInfoAlert alertText="ToDoがまだありません。" :todos="store.todos" />
  <TodoErrorAlert :errors="errors" />
  <TodoAdd
    v-model="inputText"
    :clearDoneTodos="clearDoneTodos"
    :onSubmit="onSubmit"
  />
  <v-table>
    <thead>
      <tr>
        <th class="text-left">タスク名</th>
        <th class="text-left">操作ボタン</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(todo, index) in store.todos">
        <td>
          <v-checkbox
            v-model="store.doneTodos"
            :label="todo"
            :value="todo"
            hide-details="auto"
          ></v-checkbox>
        </td>
        <td>
          <v-btn color="secondary" :to="`/${index}/edit`">編集</v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
