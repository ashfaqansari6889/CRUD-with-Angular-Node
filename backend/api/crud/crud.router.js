const router = require("express").Router();

const {
    getUserCtrl,
    getUserByIdCtrl,
    createNewUserCtrl,
    updateUserCtrl,
    deleteUserCtrl
} = require("./crud.controller");

router.get("/", getUserCtrl);
router.get("/:id", getUserByIdCtrl);
router.post("/", createNewUserCtrl);
router.put("/:id", updateUserCtrl);
router.delete("/:id", deleteUserCtrl);

module.exports = router;
