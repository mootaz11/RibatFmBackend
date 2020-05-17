const router = require("express").Router()
const commentController = require("../controllers/commentController");
const authentication = require("../middlewares/authentication");

router.get("/allComments",authentication,commentController.showComments);
router.get("/comments/:idactualite",authentication,commentController.showCommentsByActualite)
router.post("/createComment/:idactualite",authentication,commentController.createComment);
router.delete("/deleteComment/:idcomment",authentication,commentController.deleteComment);

module.exports=router;