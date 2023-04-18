const testString = "evmos1";

export const checkIfStringContains = (arg: string): boolean => {
  const regexp = new RegExp(testString);
  return regexp.test(arg);
};
