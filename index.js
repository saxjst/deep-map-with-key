const R = require("ramda");

/** Check that the sending type is the type of an object
 *
 * @param {Object} type
 * @return {Boolean}
 * @api private
 */
const isClassicalObject = type =>
  type === "[object Object]" || type === "[object Array]";

/** Creates a new functor with the results of calling a provided function on every element in the calling functor and its key
 *
 * @sig ((String, *) -> *) -> Object | Array -> Object | Array
 * @param {Function} fn - The function to be called on every element of the input `list`
 * @param {Object|Array} functor - The functor to iterate over
 * @return {Object|Array} Returns a new value after applying rules
 * @api public
 * @example
 *
 *   const cart = { rice: 2, fruits: { apple: 4, orange: 8 } } };
 *   const double = (key, val) => val * 2;
 *   deepMapWithKey(double, cart); //=> { rice: 4, fruits: { apple: 8, orange: 16 } }
 *
 */
const deepMapWithKey = R.curry((fn, functor) => {
  let newObj;

  const functorType = Object.prototype.toString.call(functor);
  if (functorType === "[object Object]") {
    newObj = {};

    Object.keys(functor).forEach(key => {
      const keyType = Object.prototype.toString.call(functor[key]);

      if (isClassicalObject(keyType)) {
        newObj[key] = deepMapWithKey(fn, functor[key]);
      } else {
        newObj[key] = fn(functor[key], key);
      }
    });
  } else if (functorType === "[object Array]") {
    newObj = functor.map((val, index) => {
      const keyType = Object.prototype.toString.call(val);

      if (isClassicalObject(keyType)) {
        return deepMapWithKey(fn, val);
      }
      return fn(val, index.toString());
    });
  } else {
    newObj = fn(functor);
  }

  return newObj;
});

module.exports = deepMapWithKey;
