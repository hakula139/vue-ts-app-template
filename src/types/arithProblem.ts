export type ArithOperator = '+' | '-' | '*' | '/';

export interface ArithProblem {
  operator: ArithOperator;
  var1: number;
  var2: number;
}
