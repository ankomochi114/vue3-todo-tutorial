<script setup lang="ts">
import TodoAdd from "@/components/TodoAdd.vue";
import TodoInfoAlert from "@/components/TodoInfoAlert.vue";
import TodoErrorAlert from "@/components/TodoErrorAlert.vue";
import { ref } from "vue";
import type { Ref } from "vue";

const todos: Ref<string[]> = ref([]);
const doneTodos: Ref<string[]> = ref([]);

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
  errors.value = "";
};

/**
 * 完了済みのタスクを削除
 * @return 新しいtodoリスト
 */
const clearDoneTodos = () => {
  return (todos.value = todos.value.filter((todo) =>
    doneTodos.value.every((element) => element !== todo)
  ));
};
</script>

<template>
  <TodoInfoAlert alertText="ToDoがまだありません。" :todos="todos" />
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
      <tr v-for="todo in todos">
        <td>
          <v-checkbox
            v-model="doneTodos"
            :label="todo"
            :value="todo"
            hide-details="auto"
          ></v-checkbox>
        </td>
        <td><v-btn color="secondary">編集</v-btn></td>
      </tr>
    </tbody>
  </v-table>
</template>
