// 可索引类型具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型。
export interface StringArray {
  [index: number]: string;
}

export interface ReadonlyStringArray {
  readonly [index: number]: string;
}

export interface NumberArray {
  [index: number]: number;
}

// function sum() {
//   let args: IArguments = arguments;
// }
// interface IArguments {
//   [index: number]: any;
//   length: number;
//   callee: Function;
// }