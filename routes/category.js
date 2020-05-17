const router = require("express").Router()
const CategoryController = require("../controllers/categoryController");
const authentication = require("../middlewares/authentication");


router.get("/getcategories",CategoryController.getAllCategories);
router.post("/create",authentication,CategoryController.createCategory);
router.patch("/update/:idcategory",authentication,CategoryController.updateCategory);
router.get("/:idcategory",CategoryController.showCategory);
router.delete("/delete/:idcategory",authentication,CategoryController.deleteCategory);
module.exports = router;