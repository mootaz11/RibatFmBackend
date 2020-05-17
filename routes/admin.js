const router = require("express").Router()
const AdminController = require("../controllers/adminController");
const authentication = require("../middlewares/authentication");

router.post("/signup", AdminController.signup);
router.post("/login", AdminController.login);
router.post("/update/:id",authentication,AdminController.updateInfo);
router.delete("/deleteAdmin/:id",authentication,AdminController.delete_Sous_Admin)
router.get("/Sous_admins",authentication,AdminController.All_sub_admins)
router.get("/allAdmins",authentication,AdminController.all_admins)
module.exports = router;    