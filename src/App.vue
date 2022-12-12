<template>
  <v-toolbar>
    <v-toolbar-title>My ToDo App</v-toolbar-title>
    <v-toolbar-items>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/edit">Edit</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-container>
    <h1></h1>
    <router-view />
  </v-container>
</template>
