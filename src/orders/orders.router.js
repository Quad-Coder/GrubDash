
const router = require("express").Router();
const { route } = require("../orders/orders.router");
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./orders.controller");

// TODO: Implement the /orders routes needed to make the tests pass
router
  .route("/:orderId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.destroy)
  .all(methodNotAllowed);
module.exports = router;

router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
