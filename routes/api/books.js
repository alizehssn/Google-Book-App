const router = require("express").Router();
const booksController = require("../../controller/bookController")

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  // .post(booksController.create);

// Matches with "/api/books/:id"
router.route("/:id")
  .post(booksController.create)
  // .get(booksController.findById)
  // .put(booksController.update)
  // .delete(booksController.remove);

module.exports = router;