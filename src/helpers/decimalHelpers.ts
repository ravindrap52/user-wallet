/**
 * This method will check if the number is in Hex format or not
 *
 * @param {hex} hex hex in number format
 * @returns {boolean} returns true or false
 */

export const checkIfNumberIsHex = (hex: string): boolean => {
  return window.web3.utils.isHexStrict(hex);
};

/**
 * This will convert in to ```wei``` this conversion is only for display reasons
 *
 * @param {decimal} decimal decimal in number format
 * @returns {number} returns the number
 */

export const convertToCrypto = (decimal: number): number => {
    return Number(window.web3.utils.fromWei(String(decimal), 'ether'));
}