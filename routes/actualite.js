const router = require("express").Router()
const ActualiteController = require("../controllers/actualiteController");
const multer_image = require("../config/multer_image");
const authentication = require("../middlewares/authentication");


router.post("/create/:idadmin/:idcategory",authentication,multer_image.single('image'), ActualiteController.CreateActualite)
router.patch("/update/:idactualite/:adminid",authentication,multer_image.single('image'), ActualiteController.updateActualite);
router.delete("/delete/:idactualite",authentication,ActualiteController.deleteActualite);
router.get("/actualites",authentication,ActualiteController.getAllActualites);
router.get("/:idactualite",authentication,ActualiteController.getActualite);
router.get("/:idcategory/getAllActualitesByCategory",ActualiteController.getActualitesByCategory);



module.exports = router;