<template>
  <div>This login data {{ count }}</div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import appStore from '@/store'
const { count } = storeToRefs(appStore.useCounterStoreForSetup)
</script>

<style scoped></style>
