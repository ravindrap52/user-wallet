const testString = "evmos1";

/**
 * This method will check if the string contains evmos1
 *
 * @param {arg} arg arg in string format
 * @returns {boolean} returns true or false
 */
export const checkIfStringContains = (arg: string): boolean => {
  const regexp = new RegExp(testString);
  return regexp.test(arg);
};
