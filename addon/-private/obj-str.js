/**
  A simple function that turns object keys into a single string,
  if the value is truthy or an empty string

  ```js
  let classNames = objStr({
    'btn-primary': true,
    'btn-small': false,
    'btn-circle: checkCircle() // true
  });

  // 'btn-primary btn-circle'
  ```

  @param {Object} obj
  @return {string}
*/
export default function objStr(obj) {
  let classNames = '';

  Object.keys(obj).forEach((key) => {
    if (checkValue(obj[key])) {
      classNames += ' ' + key;
    }
  });

  return classNames.trim();
}

/**
  Return true if the given value is truthy or an empty string

  @param {any} value
  @return {boolean}
*/
export function checkValue(value) {
  return Boolean(value) || value === '';
}
