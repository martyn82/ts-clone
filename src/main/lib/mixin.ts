
/**
 * Mixin decorator. To be applied to classes to support a flavor of traits.
 *
 * @param baseTypes An array of classes to inherit properties and methods from.
 * @returns The final class.
 */
export function Mixin(...baseTypes: Function[]): Function {
  return (target: Function): void => {
    applyMixins(target, baseTypes);
  };
}

function applyMixins(derivedType: Function, baseTypes: Function[]): void {
  baseTypes.forEach(baseType => {
    Object.getOwnPropertyNames(baseType.prototype).forEach(propertyName => {
      derivedType.prototype[propertyName] = baseType.prototype[propertyName];
    });
  });
}
