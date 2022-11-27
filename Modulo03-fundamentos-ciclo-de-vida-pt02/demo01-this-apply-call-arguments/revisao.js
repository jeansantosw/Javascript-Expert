function Product(name, price) {
  this.name = name
  this.price = price

  return this
}

function Food(name, price, category) {
  Product.call(this, name, price)
  this.category = category

  if (price > 0) {
    console.log('O produto: ' + this.name + ' está '+ this.price + ' ok em estoque, na categoria: ' + category);
  }
}

Food.prototype = Object.create(Product.prototype)


var cheese = new Food('banana', 5, 'fruta')
