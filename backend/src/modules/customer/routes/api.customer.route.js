const express = require("express");
const router = express.Router();
const passport = require("passport");
const customerController = require("../controllers/customerController");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  customerController.index
);
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  customerController.store
);
router.put(
  "/:id/edit",
  passport.authenticate("jwt", { session: false }),
  customerController.update
);
router.delete(
  "/:id/delete",
  passport.authenticate("jwt", { session: false }),
  customerController.destroy
);

module.exports = router;
