const express = require("express");
const {
  getAccessToRoute,
  getAdminAccess,
} = require("../middlewares/authorization/auth");
const{checkUserExist} = require("../middlewares/database/databaseErrorHelpers");
const {blockUser,deleteUser} =  require("../controllers/admin");



const router = express.Router();


router.use([getAccessToRoute, getAdminAccess]);

//Block User
router.get("/block/:id",checkUserExist,blockUser);

//Delete User
router.delete("/user/:id",checkUserExist,deleteUser);

module.exports = router;
