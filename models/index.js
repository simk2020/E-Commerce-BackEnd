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