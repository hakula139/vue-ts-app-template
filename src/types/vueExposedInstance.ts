import { ComponentPublicInstance } from 'vue';

export interface ArithProblemListItemExposed {
  checkAnswer: () => boolean;
}

export type ArithProblemListItemInstance = ComponentPublicInstance<ArithProblemListItemExposed>;

export interface TimeCounterExposed {
  timer: number;
  currentTime: () => string;
  resetTimer: () => void;
  startTimer: () => void;
}

export type TimeCounterInstance = ComponentPublicInstance<TimeCounterExposed>;
