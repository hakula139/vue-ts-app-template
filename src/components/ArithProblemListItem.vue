<template>
  <a-card size="small">
    <a-space>
      <span>{{ data.var1 }} {{ data.operator }} {{ data.var2 }} =</span>
      <a-input-number
        id="userInput"
        v-model:value="userInput"
        @change="startTimer"
      />
    </a-space>
  </a-card>
</template>

<script setup lang="ts">
import { computed, ref, toRefs } from 'vue';

import { ArithOperator, ArithProblem } from '@/types';

const props = defineProps<{
  data: ArithProblem;
}>();

const emit = defineEmits<{
  (event: 'startTimer'): void;
}>();

type ArithOperatorFunc = (x: number, y: number) => number;
const operatorMap = new Map<ArithOperator, ArithOperatorFunc>([
  ['+', (x, y) => x + y],
  ['-', (x, y) => x - y],
  ['*', (x, y) => x * y],
  ['/', (x, y) => x / y],
]);

const { operator, var1, var2 } = toRefs(props.data);
const answer = computed(() => operatorMap.get(operator.value)!(var1.value, var2.value));
const userInput = ref(0);
const checkAnswer = (): boolean => userInput.value === answer.value;

const startTimer = (): void => emit('startTimer');

defineExpose({
  checkAnswer,
});
</script>
