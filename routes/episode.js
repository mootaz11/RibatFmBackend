const router = require("express").Router()
const episodeController = require("../controllers/episodeController");
const multer_son=require("../config/multer_son");
const authentication = require("../middlewares/authentication");



router.get("/getepisodes",authentication,episodeController.getAllEpisodes);
router.post("/createEpisode/:idpodcast",authentication,multer_son.single("sequence"),episodeController.createEpisode);
router.post("/update/:idepisode",authentication,multer_son.single("sequence"),episodeController.updateEpisode);
router.get("/getEpisode/:idpodcast",authentication,episodeController.getEpisodesbyPodcast);
router.delete("/deleteEpisode/:idepisode",authentication,episodeController.delete_episode);
router.get("/:idepisode",authentication,episodeController.getEpisode);



module.exports=router;