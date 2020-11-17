<template>
  <div class="about">about</div>
  <div>count: {{ state.count }}</div>
  <div>doubleCount: {{ doubleCount }}</div>
  <button @click="add">click + 1</button>
  <a-button type="primary">Primary</a-button>
</template>
<script lang="ts">
import { reactive, computed } from 'vue'
interface User {
  name: string;
}

function useCount() {
  const state = reactive({ count: 1 })
  const doubleCount = computed(() => state.count * 2)
  const add = () => {
    state.count++
  }
  return { state, add, doubleCount }
}
export default {
  setup() {
    const { state, add, doubleCount } = useCount()
    return { state, add, doubleCount }
  }
}
</script>

<style lang="less" scoped>
.about {
  color: red;
}
</style>
