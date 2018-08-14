class Stack {
    constructor() {
        this.storage = [];
        this.size = 0;
    }
    getSize() {
        return this.size;
    }

    push(data) {
        this.storage.push(data);
        this.size++;
        return this.storage
    }
    peek() {
        if (this.storage.length) {
            return this.storage[0];
        }
    }

    pop() {
        if (this.storage.length) {
            this.size--;
            return this.storage.shift();
        }
    }

    displayAll() {
        if (this.storage.length) {
            return this.storage;
        } else {
            return null;
        }
    }
}
