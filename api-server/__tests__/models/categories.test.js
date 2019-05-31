'use strict'; 

const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser:true,
  useCreateIndex: true,
};

const MONGODB_URI = process.env.MONGODB_URI ||
  'mongodb://localhost/mongooseIsStupidGiveMeARealDatabase';
  
const Categories = require('../../src/models/categories')
const catRepository = new Categories ();

let categoryObj = {
  name: 'Items',
  display_name: 'Items',
  description: 'It holds Items'
};

describe('Categories Repository', () => {
  beforeAll(() => {
    return mongoose.connect(MONGODB_URI, mongooseOptions);
  });

  it('can create a category and then get the category', async () => {
    let result = await catRepository.post({name:'Items', description:'It holds Items'});
    
    expect(result).toBeDefined();
    expect(result.name).toBe('Items');
    expect(result._id).toBeDefined();

  });

});