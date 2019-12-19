const router = require("express").Router();

const db = require("./user-model");
const restricted = require("../auth/restricted-middleware");

// EndPoints: /api/users
router.get("/", restricted, (req, res) => {
  db.find()
    .then(users => {
      res.json({ users });
    })
    .catch(err => res.send(err));
});

// Middleware

module.exports = router;
