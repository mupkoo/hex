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

  for (let key in obj) {
    if (obj[key] || obj[key] === '') {
      classNames += ' ' + key;
    }
  }

  return classNames.trim();
}
