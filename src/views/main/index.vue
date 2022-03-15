<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import appStore from '@/store'
const { count } = storeToRefs(appStore.useCounterStoreForSetup)
const { increment, doubleCount } = appStore.useCounterStoreForSetup
</script>
<template>
  <div>
    <p>{{ count }}</p>
    <p>{{ doubleCount() }}</p>
    <!-- <el-button type="primary">主要按钮</el-button> -->
    <!-- <el-button type="success">成功按钮</el-button> -->
    <el-button @click="increment" type="success">点我增加</el-button>
  </div>
</template>
<style scoped></style>
