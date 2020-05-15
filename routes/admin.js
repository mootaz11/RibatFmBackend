const router = require("express").Router()
const AdminController = require("../controllers/adminController");

router.post("/signup", AdminController.signup);
router.post("/login", AdminController.login);
router.post("/update/:id", AdminController.updateInfo);
router.delete("/deleteAdmin/:id", AdminController.delete_Sous_Admin)
router.get("/Sous_admins", AdminController.All_sub_admins)
router.get("/allAdmins",AdminController.all_admins)
module.exports = router;