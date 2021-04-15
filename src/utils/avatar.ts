/**
 * get Initials of a user's name
 * @param {string } text - text to split into initials
 * @returns {string} initials of name
 */

export const getInitials = (text: string) => {
  const nameArr = text.trim().split(' ')

  // If a single word name is passed in, use the first 2 letters
  if (nameArr.length <= 1) {
    return `${nameArr[0][0]}${nameArr[0][1]}`
  }

  // return only initials of first and second words after splitting
  return `${nameArr[0][0]}${nameArr[1][0]}`
}
