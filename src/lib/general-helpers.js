
/*
 * function to map an array of object to an object of object where the key is specified by prop
 *
 */
export const mapArrayToObject = (array, prop) => {
  return array.reduce((result, obj, index) => {
    const key = prop ? obj[prop] : index
    return {
      ...result,
      [key]: obj
    }
  }, {})
}
