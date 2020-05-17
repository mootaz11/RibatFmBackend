const router = require("express").Router()
const podcastController = require("../controllers/podcastController");
const authentication = require("../middlewares/authentication");


router.post("/createpodcast",authentication,podcastController.createpodcast);
router.patch("/updatepodcast/:idpodcast",authentication,podcastController.updatepodcast);
router.delete("/delete/:idpodcast",authentication,podcastController.deletePodcast);
router.get("/getAllPodcast",podcastController.getAllPodcasts);
router.get("/getPodcastByType",podcastController.getPodcastsByType);
router.get("/getPodcast/:idpodcast",podcastController.getPodcast);
module.exports=router;