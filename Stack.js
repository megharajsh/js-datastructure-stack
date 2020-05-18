export class Stack {
  constructor() {}

  count = 0;
  storage = [];

  push(val) {
    this.storage[this.count] = val;
    this.count++;
  };

  pop() {
    if (this.count === 0 ) {
      return 'Stack is Empty';
    }
    
    const removeItem = this.storage[this.count-1];
    delete this.storage[this.count];
    this.count--;

    return removeItem;
  };

  peek() {
    return this.storage[this.count-1];
  };

  size() {
    return this.count;
  };
}