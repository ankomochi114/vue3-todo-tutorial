<script lang="ts">
export default {
  data() {
    return {
      title: 'My New Vue Title',
      message: 'Welcome to Vue',
      isRed: true,
      user: {
        firstName: 'John',
        lastName: 'Smith',
      },
    }
  },
  computed: {
    fullName() {
      return this.user.firstName + ' ' + this.user.lastName
    },
  },
}
</script>

<template>
  <h1 :title="message" :class="{ red: isRed }">{{ title }}</h1>
  <h2>{{ fullName }}さんのデータ</h2>
  <p>Name: {{ fullName }}</p>
</template>
