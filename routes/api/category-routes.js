const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  // try {
  //   const products = await Category.findAll();
  //   console.log (products);
  //   res.status(200).json(products);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  // try {
  //   const products = await Category.findByPk(req.params.id, {
  //     // JOIN with travellers, using the Trip through table
  //     include: [{ model: Product, through: productTag, as: 'product_tagssss' }]
  //   });

  //   if (!products) {
  //     res.status(404).json({ message: 'No location found with this id!' });
  //     return;
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
