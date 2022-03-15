<template>
  <div id="app">
    <router-link to="/login">go login</router-link>
    <router-link to="/main">to Index</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style></style>
