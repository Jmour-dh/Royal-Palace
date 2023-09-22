const bcrypt = require("bcrypt");
const pool = require("../../database/queries");
const router = require("express").Router();

router.post("/", async (req, res) => {
  let { name, lname, email, password } = req.body;
  password = await bcrypt.hash(password, 8);
  pool.query(
    "INSERT INTO users (name, lname, email, password, admin) VALUES ($1, $2, $3, $4, false) RETURNING *",
    [name, lname, email, password],
    (err, results) => {
      if (err) {
        console.log(err);
        if (err.code === 23505) {
          res.status(400).json("Email déjà utilisé");
        } else {
          res.status(400).json("Oops une erreur est survenue");
        }
      }

      res.json(results);
    }
  );
});

router.get('/', async (req, res) => {

  try {
    // Exécutez une requête SQL pour sélectionner name, lname, et email de la table "users"
    const result = await pool.query('SELECT name, lname, email FROM users');
    console.log(result);
    const users = result.rows;

    // Répondez avec les données des utilisateurs au format JSON
    res.json(users);
  } catch (err) {
    console.error('Erreur lors de la récupération des utilisateurs :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});




module.exports = router;
