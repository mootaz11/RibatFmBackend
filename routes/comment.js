const router = require("express").Router()
const commentController = require("../controllers/commentController");
const authentication = require("../middlewares/authentication");

router.get("/allComments",authentication,commentController.showComments);
router.get("/comments/:idactualite",commentController.showCommentsByActualite)
router.post("/createComment/:idactualite",commentController.createComment);
router.delete("/deleteComment/:idcomment",commentController.deleteComment);

module.exports=router;