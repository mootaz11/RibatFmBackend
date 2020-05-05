const router = require("express").Router()
const CategoryController = require("../controllers/categoryController");

router.get("/getcategories", CategoryController.getAllCategories);
router.post("/create", CategoryController.createCategory);
router.patch("/update/:idcategory", CategoryController.updateCategory);
router.get("/:idcategory", CategoryController.showCategory);
router.delete("/delete/:idcategory", CategoryController.deleteCategory);
module.exports = router;