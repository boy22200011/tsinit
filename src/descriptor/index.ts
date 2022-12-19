export function sayHello() {
  return (
    target: object,
    propertyKey: string,
    descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = async (...args: any) => {
      try {
        return await originalMethod.apply(this, args);
      } catch (error) {
        console.log(error);
      }
    };
    return descriptor;
  };
}
