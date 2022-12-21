<script setup lang="ts">
type Prop = {
  todos: string[];
  modelValue: string;
};

defineProps<Prop>();
const emits = defineEmits<{ (e: "update:modelValue", text: string): void }>();

const onInputText = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emits("update:modelValue", target.value);
};
</script>
<template>
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
            @input="onInputText"
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
