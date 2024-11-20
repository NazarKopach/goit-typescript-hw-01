function showMessage(message: string): void {
  console.log("Basic task_4:", message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

showMessage("Hello World!!!");
console.log("Basic task_4:", calc(5, 5));
