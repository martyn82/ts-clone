
/**
 * Clones the given source and returns its copy.
 *
 * @param source The value to clone.
 * @param target An optional object to copy the content of source into to preserve types for regular objects.
 * @returns The copy of source.
 */
export function clone(source: any, target?: any): any {
  let copy;

  if (source === null || typeof source !== "object") {
    return source;
  }

  if (source instanceof Date) {
    copy = new Date();
    copy.setTime(source.getTime());
    return copy;
  }

  if (source instanceof Array) {
    copy = [];

    for (let i = 0; i < source.length; i++) {
      copy[i] = clone(source[i]);
    }

    return copy;
  }

  if (target) {
    copy = target;
  } else {
    copy = {};
  }

  for (const prop in source) {
    if (source.hasOwnProperty(prop)) {
      copy[prop] = clone(source[prop]);
    }
  }

  return copy;
}
