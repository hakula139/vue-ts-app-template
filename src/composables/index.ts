export const padNumber = (value: number): string =>
  value.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
  });
