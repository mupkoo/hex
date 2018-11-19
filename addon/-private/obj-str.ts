/**
  A simple function that turns object keys into a single string,
  if the value is truthy or an empty string

  @param {Object} obj
  @return {string}
*/
export default function objStr(obj: { [key: string]: any }): string {
  let classNames = '';

  for (let key in obj) {
    if (obj[key] || obj[key] === '') {
      classNames += ' ' + key;
    }
  }

  return classNames.trim();
}
