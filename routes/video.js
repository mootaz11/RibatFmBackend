const router = require("express").Router();
const videoController = require("../controllers/videoController");
const multer_video = require("../config/multer_video");
const authentication = require("../middlewares/authentication");



router.get("/videos",videoController.getAll);
router.post("/create", authentication,multer_video.single("sequence"), videoController.create);
router.patch("/update/:idvideo", authentication,multer_video.single("sequence"), videoController.update);
router.delete("/delete/:idvideo",authentication,videoController.deleteVideo);
router.get(":idvideo",videoController.getVideo);



module.exports = router;