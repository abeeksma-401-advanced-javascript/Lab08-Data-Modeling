'use strict';

const Category = require('./categories-schema');

class Categories {

//get a category
  get(_id) {
//checks for a 24 character id containing 0-9 or a-z as characters (case insensitive)
    if(!/^[0-9a-z]{24}$/i.test(_id)){
      return Promise.resolve(null)
    }
    return Category.findOne(_id);
  }

  //get all categories
  getAll(){
    return Category.find();
  }
  
//create a category
  post(record) {
    var category = new Category (record);
    return category.save();
  }

//update a category?  
  put(_id, record) {
  }

//DESTROY!!!!  
  delete(_id) {
  }

}

module.exports = Categories;
