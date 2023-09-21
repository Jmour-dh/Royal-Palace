const pool = require("../../database/queries");
const router = require("express").Router();

router.post("/", async (req, res) => {
  const { name, lname, email, phone, msg } = req.body;

  pool.query(
    "INSERT INTO contacts (name, lname, email, phone, msg) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [name, lname, email, phone, msg],
    (err, results) => {
      if (err) {
        console.log(err);
       }

      res.json(results);
    }
  );
});

module.exports = router;
