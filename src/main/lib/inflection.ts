
export type AnyType = {new(... args: any[]): any};

/**
 * Inflects the class name of the given object.
 *
 * @param object The object to inflect the class name for.
 * @param context An optional context type of which name will prefix the class name of object.
 * @returns The (prefixed) class name of object.
 */
export function classOf(object: Object, context?: any): string {
  if (typeof object !== "object") {
    return "";
  }

  return className(<AnyType>object.constructor, context);
}

/**
 * Inflects the class name of the given type.
 *
 * @param type The type to inflect the class name for.
 * @param context An optional context type of which name will prefix the class name of type.
 * @returns The (prefixed) class name of type.
 */
export function className(type: AnyType, context?: any): string {
  if (context) {
    return [context.name, type.name].join("$");
  }

  return type.name;
}
