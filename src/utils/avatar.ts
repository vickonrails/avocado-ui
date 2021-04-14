/**
 * get Initials of a user's name
 * @param {string } text - text to split into initials
 * @returns {string} initials of name
 */

export const getInitials = (text: string) => {
  const nameArr = text.split(' ')
  // return only initials of first and second words after splitting
  return `${nameArr[0][0]}${nameArr[1][0]}`
}
