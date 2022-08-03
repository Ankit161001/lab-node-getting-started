class SortedList {
  constructor() {
    this.items = []
    this.length = 0;
  }
  add(item) {
   this.items.push(item)
   this.items.sort((a,b)=>a>b?1:-1)
   this.length = this.items.length
  }
  get(pos) {
    if (pos > this.length) {
      throw new Error('OutOfBounds');
    }
    else {
      return this.items[pos]
    }
  }
  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    else {
      return Math.max(...this.items)
    }
  }
  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    else {
      return Math.min(...this.items)
    }
  }
  avg() {
    let sum = 0
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    else {
      this.items.forEach(element => {
        sum += element;
      });
      return sum/this.length
    }
   
  }

  sum() {
    let sum = 0
    if (this.length === 0) {
      return 0
    }
    else {
      this.items.forEach(element => {
        sum += element;
      });
      return sum
    }
  }
  
};

module.exports = SortedList;
