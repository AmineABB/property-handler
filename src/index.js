/**
 * Check if the property is of type object
 * @param {Object} obj
 * @returns true if the given element is object type
 */
const isObjectType = obj => typeof obj === 'object' && !(obj instanceof Array)

/**
 * Check if property is of type array
 * @param {Array} array
 * @returns boolean
 */
const isArrayType = array => array && Array.isArray(array)

/**
 * Get object property value
 * @param {Object} object
 * @param {String} property
 * @returns The object property value
 */
const getPropertyValue = (object, property) => object[property]

/**
 * If only one item found inside the populated properties
 * we return it, otherwise we return all the list items
 * @param {Array} array
 * @returns Array of value or one value if array length equal 1
 */
const getResults = array => (array.length < 2 ? array[0] : array)

/**
 * Transform property string with dot to object syntax
 * @param {Object} object
 * @param {String} propertyName
 * @returns Return property value if found
 */
const getDotPropertyValues = (object, propertyName) => {
    const dotResults = propertyName.split('.').reduce(getPropertyValue, object)
    return isArrayType(dotResults) ? getResults(dotResults) : dotResults
}

/**
 * Populate properties found into a list
 * @param {*} value
 * @param {Array} output
 */
const fillToResult = (item, output) => {
    if (isArrayType(item)) {
        for (let i = 0, len = item.length; i < len; i += 1) {
            output.push(item[i])
        }
    } else {
        output.push(item)
    }
}

/**
 * Check if string contains dot
 * @param {string} string
 * @returns boolean
 */
const isDotProperty = string => string.includes('.')

/**
 * Handling object properties:
 * - Can accept specific object property like objectPropHandler(myObject, 'foo.bar')
 * - Can retrieve all properties values inside the object EX: objectPropHandler(myObject, 'bar')
 * @param {Object} object
 * @param {String} prop
 * @returns Array of properties values or only property one value
 */
const objectPropHandler = (object, property = '') => {
    if (!object) { return object }
    const output = []
    if (isDotProperty(property)) {
        return getDotPropertyValues(object, property)
    }
    const populateProperty = (obj) => {
        Object.keys(obj).forEach((k) => {
            const currentValue = getPropertyValue(obj, k)
            if (k === property) {
                fillToResult(currentValue, output)
            }
            if (isObjectType(currentValue)) {
                populateProperty(currentValue)
            }
        })
        return getResults(output)
    }
    return populateProperty(object)
}

/**
 * Get property value of the given object
 * @param {*} object
 * @param {*} property
 */
const getNestedProp = (object, property) => objectPropHandler(object, property)

module.exports = {
    getProp: getNestedProp,
}
