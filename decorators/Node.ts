export default function Node(name: string) {
  return function (constructorFunction: Function) {
    Reflect.defineMetadata("name", name, constructorFunction.prototype);
  };
}
