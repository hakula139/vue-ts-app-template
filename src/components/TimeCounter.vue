<template>
  <span v-if="timer">当前耗时：{{ parse(hour()) }}:{{ parse(minute()) }}:{{ parse(second()) }}</span>
</template>

<script setup lang="ts">
import { defineExpose, ref } from 'vue';

const timer = ref(0);
const hour = (): number => Math.floor(timer.value / 3600);
const minute = (): number => Math.floor(timer.value / 60);
const second = (): number => timer.value % 60;

let timerHandler = 0;

const resetTimer = (): void => {
  clearInterval(timerHandler);
  timer.value = 0;
};

const startTimer = (): void => {
  resetTimer();
  timerHandler = setInterval((): void => {
    timer.value += 1;
  }, 1000);
};

const parse = (value: number): string =>
  value.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
  });

defineExpose({
  timer,
  resetTimer,
  startTimer,
});
</script>
