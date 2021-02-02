// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: {
    name: 'category_id',
    unique: false,
  }
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: ProductTag,
  // Define an alias for when data is retrieved
  as: 'product_tagssss',
  foreignKey: 'product_id'
});
// Tags belongToMany Products (through ProductTag)




module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};





Location.hasMany(Trip, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE'
});

Trip.belongsTo(Location, {
  foreignKey: {
    name: 'location_id',
    unique: false,
  },
});

Traveller.belongsToMany(Location, {
  // Define the third table needed to store the foreign keys
  through: Trip,
  // Define an alias for when data is retrieved
  as: 'planned_trips',
  foreignKey: 'traveller_id'
});

Location.belongsToMany(Traveller, {
  // Define the third table needed to store the foreign keys
  through: Trip,
  // Define an alias for when data is retrieved
  as: 'location_travellers',
  foreignKey: 'location_id'
});

module.exports = { Traveller, Location, Trip };
