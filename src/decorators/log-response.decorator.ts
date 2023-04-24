export function LogResponse() {
  return (
    target: any,
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor,
  ) => {
    const originalMethod = propertyDescriptor.value;

    propertyDescriptor.value = async function (...args: any[]) {
      const result = await originalMethod.apply(this, args);
      console.log(
        `[${target.constructor.name} - ${propertyKey}] Response:`,
        result,
      );
      return result;
    };

    return propertyDescriptor;
  };
}
