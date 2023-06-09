const router = require ('express').Router ();
const Category = require ('../models/Category');

// CREATE a new category
router.post ('/', async (req, res) => {
  // Create a new Category object using the request body
  const newCat = new Category (req.body);
  try {
    // Save the new category to the database
    const savedCat = await newCat.save ();
    res.status (200).json (savedCat);
  } catch (err) {
    res.status (500).json (err);
  }
});

// GET all categories
router.get ('/', async (req, res) => {
  try {
    // Find all categories in the database
    const cats = await Category.find ();
    res.status (200).json (cats);
  } catch (err) {
    res.status (500).json (err);
  }
});

module.exports = router;
