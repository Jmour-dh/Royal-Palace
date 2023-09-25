const router = require("express").Router();
const apiUsers = require("./users");
const apiAuth = require("./auth");
const apiCont = require("./contacts");
const apiRes = require('./reserver')

router.use("/users", apiUsers);
router.use("/auth", apiAuth);
router.use("/contacts", apiCont);
router.use("/reserver", apiRes);


module.exports = router;
