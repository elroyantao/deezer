import { mapArrayToObject } from '../general-helpers'

describe('general-helpers.js', () => {
  describe('mapArrayToObject()', () => {
    const array = [{
      id: 37,
      name: 'pop'
    }, {
      id: 238,
      name: 'country'
    }]
    it('should output an object using the key specified as prop', () => {
      const obj = mapArrayToObject(array, 'id')
      expect(obj).toEqual({
        37: {
          id: 37,
          name: 'pop'
        },
        238: {
          id: 238,
          name: 'country'
        }
      })
    })
    it('should output object with key as index if prop is not specified', () => {
      const obj = mapArrayToObject(array)
      expect(obj).toEqual({
        0: {
          id: 37,
          name: 'pop'
        },
        1: {
          id: 238,
          name: 'country'
        }
      })
    })
  })
})
