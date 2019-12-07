import Taro, { useEffect, useReachBottom, useRouter } from '@tarojs/taro'

export function Page (constructor) {
  // console.log('dddd');
  return function (target) {
    const router = useRouter();

    // console.log('ddd', router);

    return constructor(router);
  }
}

export function logMethod(
  target: Object,
  propertyName: string,
  propertyDescriptor: PropertyDescriptor): PropertyDescriptor {
  // target === Employee.prototype
  // propertyName === "greet"
  // propertyDesciptor === Object.getOwnPropertyDescriptor(Employee.prototype, "greet")
  const method = propertyDescriptor.value;

  propertyDescriptor.value = function (...args: any[]) {
    // 将 greet 的参数列表转换为字符串
    const params = args.map(a => JSON.stringify(a)).join();
    // 调用 greet() 并获取其返回值
    const result = method.apply(this, args);
    // 转换结尾为字符串
    const r = JSON.stringify(result);
    // 在终端显示函数调用细节
    console.log(`Call: ${propertyName}(${params}) => ${r}`);
    // 返回调用函数的结果
    return result;
  }
  return propertyDescriptor;
};


function method(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log(target);
  console.log("prop " + propertyKey);
  console.log("desc " + JSON.stringify(descriptor) + "\n\n");
};
