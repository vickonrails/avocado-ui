/**
 *
 * @param {string} text - text to trim
 * @param {number} limit - number of characters to trim to
 * @returns {string}
 */
export const trimText = (text: string, limit: number) => {
  if (limit > text.length) {
    return text
  }
  return `${text.substr(0, limit)}...`
}
