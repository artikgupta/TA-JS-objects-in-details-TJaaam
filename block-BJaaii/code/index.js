class Stack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
    return this.stack;
  }

  pop() {
    return this.stack.pop();
  }

  peek(i) {
    return this.stack[i] || this.stack[this.stack.length - 1];
  }

  reverse() {
    return this.stack.reverse();
  }

  isEmpty() {
    if (this.stack.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  displayStack() {
    return this.stack.join("");
  }

  get length() {
    return this.stack.length;
  }
}

let myStack = new Stack();

console.log(myStack.push("Arti"));
console.log(myStack.push("Gupta"));
console.log(myStack.pop("Arti"));
console.log(myStack.peek());
console.log(myStack.reverse());
console.log(myStack.isEmpty());

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(item) {
    return this.queue.push(item);
  }

  dequeue() {
    return this.queue.shift();
  }

  peek(i) {
    return this.stack[i] || this.stack[this.stack.length - 1];
  }

  isEmpty() {
    if (this.stack.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  displayStack() {
    return this.stack.join("");
  }

  get length() {
    return this.stack.length;
  }
}
