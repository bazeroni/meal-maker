const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get courses () {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    }
  },
  get appetizers () {
    return this._courses.appetizers;
  },
  get mains () {
    return this._courses.mains;
  },
  get appetizers () {
    return this._courses.desserts;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    }
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const ranIdx = Math.floor(Math.random() * dishes.length);
    return dishes[ranIdx];
  },
  generateRandomMeal () {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is ${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizers', 'Chips and Salsa', 3.50);
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.50);
menu.addDishToCourse('appetizers', 'Breadsticks', 2.50);
menu.addDishToCourse('mains', 'Grilled Salmon', 15.50);
menu.addDishToCourse('mains', 'Cheeseburger', 10.50);
menu.addDishToCourse('mains', 'Calzone', 14.50);
menu.addDishToCourse('desserts', 'Cake', 5.50);
menu.addDishToCourse('desserts', 'Pie', 5.50);
menu.addDishToCourse('desserts', 'Ice Cream', 3.50);


const meal = menu.generateRandomMeal();
console.log(meal);
