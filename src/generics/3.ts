function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const objA = { name: "Alice", age: 25 };
const objB = { role: "Developer" };

console.log("Generics task_3:", merge(objA, objB));
