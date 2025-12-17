class Product {
    constructor() {
    console.log('敏感肌にも優しい100%天然由来のシャンプーです。')
    this.name = 'シャンプー';
    this.price = 500;
    this.category = '生活雑貨';
  }
}

const shampoo = new Product();

console.log(shampoo);