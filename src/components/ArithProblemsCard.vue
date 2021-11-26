<template>
  <a-card
    title="小学算术题"
    class="w-full h-full overflow-y-auto"
  >
    <a-space
      size="large"
      direction="vertical"
    >
      <a-space size="large">
        <span>
          <span>请输入题目数量：</span>
          <a-input-number
            id="problemsCount"
            v-model:value="problems.count"
            :min="1"
          />
        </span>
        <a-button @click="generateProblems">
          生成
        </a-button>

        <time-counter ref="timerRef" />
      </a-space>

      <a-space direction="vertical">
        <arith-problem-list-item
          v-for="(problem, i) in problems.data"
          :key="`problem${i}`"
          :data="problem"
          @start-timer="globalStartTimer"
        />
      </a-space>

      <a-button
        type="primary"
        @click="submit"
      >
        提交
      </a-button>
    </a-space>
  </a-card>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

import { ArithProblem } from '@/types';

const timerRef = ref();

const globalStartTimer = (): void => {
  if (!timerRef.value?.timer) {
    timerRef.value?.startTimer!();
  }
};

const problems = reactive({
  count: 1,
  data: [] as ArithProblem[],
});

const getRandomNumber = (): number => Math.ceil(Math.random() * 9);

const generateProblems = (): void => {
  timerRef.value?.resetTimer!();
  problems.data = new Array(problems.count).fill(0).map(
    (): ArithProblem => ({
      operator: '+',
      var1: getRandomNumber(),
      var2: getRandomNumber(),
    }),
  );
};

const submit = (): void => {};
</script>
