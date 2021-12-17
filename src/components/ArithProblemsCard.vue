<template>
  <a-card
    title="Arithmetic Test"
    class="w-full h-full overflow-y-auto"
  >
    <a-space
      size="large"
      direction="vertical"
    >
      <a-space size="large">
        <span>Please input the number of problems:</span>
        <a-input-number
          id="problemsCount"
          v-model:value="problems.count"
          :min="1"
        />
        <a-button @click="generateProblems">
          Generate
        </a-button>

        <time-counter ref="timerRef" />
      </a-space>

      <a-space direction="vertical">
        <arith-problem-list-item
          v-for="(problem, i) in problems.data"
          :ref="setProblemRefs"
          :key="`problem-${i}`"
          :data="problem"
          @start-timer="globalStartTimer"
        />
      </a-space>

      <a-button
        v-if="problems.data.length"
        type="primary"
        @click="openResultModal"
      >
        Submit
      </a-button>
    </a-space>

    <a-modal
      v-model:visible="resultModal.visible"
      title="Result"
    >
      <template #footer>
        <a-button
          key="back"
          @click="closeResultModal"
        >
          OK
        </a-button>
      </template>
      <p>Score: {{ resultModal.score }} / {{ problems.count }}</p>
      <p>Time spent: {{ resultModal.spentTime }}</p>
    </a-modal>
  </a-card>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

import { ArithProblemListItem } from '@/components';
import {
  ArithOperator, arithOperators, ArithProblem, ArithProblemListItemInstance, TimeCounterExposed,
} from '@/types';

/**
 * Due to a type inference issue in Vue 3.2 with TypeScript, we have to define the type of exposed instances manually
 * here as a workaround.
 * See: https://github.com/vuejs/vue-next/issues/4397
 */
const timerRef = ref<TimeCounterExposed>();

const globalStartTimer = (): void => {
  if (!timerRef.value?.timer) {
    timerRef.value?.startTimer();
  }
};

const problems = reactive({
  count: 1,
  data: [] as ArithProblem[],
  ref: new Map<string, ArithProblemListItemInstance>(),
});

const setProblemRefs: any = (el: ArithProblemListItemInstance): void => {
  if (el) {
    const key = el.$.vnode.key as string;
    problems.ref.set(key, el);
  }
};

const getRandomOperator = (): ArithOperator => arithOperators[Math.floor(Math.random() * arithOperators.length)];

const getRandomNumber = (): number => Math.ceil(Math.random() * 9);

const generateProblems = (): void => {
  timerRef.value?.resetTimer();
  problems.ref.clear();
  problems.data = new Array(problems.count).fill(0).map(
    (): ArithProblem => ({
      operator: getRandomOperator(),
      var1: getRandomNumber(),
      var2: getRandomNumber(),
    }),
  );
};

const resultModal = reactive({
  visible: false,
  score: 0,
  spentTime: '--:--:--',
});

const openResultModal = (): void => {
  resultModal.visible = true;
  resultModal.score = [...problems.ref.entries()].reduce((totalScore, [key, problemRef]) => {
    const score = Number(problemRef.checkAnswer());
    console.log(`${key} score: ${score}`);
    return totalScore + score;
  }, 0);
  resultModal.spentTime = timerRef.value?.currentTime() || '--:--:--';
};

const closeResultModal = (): void => {
  resultModal.visible = false;
};
</script>
