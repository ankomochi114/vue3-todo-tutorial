import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodosStore = defineStore("todos", () => {
  const todos = ref<string[]>([]);
  const doneTodos = ref<string[]>([]);

  const addTodo = (text: string) => {
    todos.value.unshift(text);
  };
  const editTodo = (index: number, text: string) => {
    todos.value[index] = text;
  };
  const doneTodo = () => {
    todos.value = todos.value.filter((todo) =>
      doneTodos.value.every((element) => element !== todo)
    );
  };

  return {
    todos,
    doneTodos,
    addTodo,
    doneTodo,
    editTodo,
  };
});
